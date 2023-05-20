import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDTO } from './dto/user-login.dto';
import { AddUserDTO } from '../user/dto/add-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/login')
    login(@Body() dto: UserLoginDTO){
        return this.authService.login(dto);
    }

    @Post('/register')
    register(@Body() dto: AddUserDTO){
        return this.authService.register(dto);
    }
}
