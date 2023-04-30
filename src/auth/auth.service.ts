import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import * as bcrypt from 'bcryptjs';
import { UserLoginDTO } from './dto/user-login.dto';
import { AddUserDTO } from 'src/user/dto/add-user.dto';


@Injectable()
export class AuthService {

    constructor(private userService: UserService,
        private jwtService: JwtService) { }


    async login(dto: UserLoginDTO) {
        const user = await this.validateUser(dto);
        return this.generateToken(user);
    }

    async register(dto: AddUserDTO) {
        const candidate = await this.userService.getUserByEmail(dto.email);

        if (candidate) {
            throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userService.addUser({ ...dto, password: hashPassword });
        return this.generateToken(user);
    }

    private async validateUser(dto: UserLoginDTO) {
        const user = await this.userService.getUserByEmail(dto.email);
        const passwordEquals = await bcrypt.compare(dto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException();
    }

    private generateToken(user: User) {
        const payload = {
            email: user.email,
            id: user.id,
        }
        return {
            token: this.jwtService.sign(payload),
            user: user
        }
    }
}
