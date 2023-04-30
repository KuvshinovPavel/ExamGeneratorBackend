import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from './user-roles.model';
import { User } from 'src/user/user.model';
import { Role } from './roles.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, UserRoles, User])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}