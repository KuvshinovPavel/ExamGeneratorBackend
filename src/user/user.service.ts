import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { AddUserDTO } from "./dto/add-user.dto";
import { RolesService } from "src/roles/roles.service";

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
  ) {

  }

  async addUser(dto: AddUserDTO) {

    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("STUDENT");
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true }
    });
    return user;
  }
}
