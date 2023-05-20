import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { AddUserDTO } from "./dto/add-user.dto";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  addUser(@Body()dto: AddUserDTO) {
    return this.userService.addUser(dto);
  }


}
