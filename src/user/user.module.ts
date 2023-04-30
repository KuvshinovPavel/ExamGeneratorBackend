import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { RolesModule } from 'src/roles/roles.module';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[
    forwardRef(()=>{AuthModule}),
    RolesModule,
    SequelizeModule.forFeature([User, Role, UserRoles])
  ],
  exports:[
    UserService
  ]
})
export class UserModule {}