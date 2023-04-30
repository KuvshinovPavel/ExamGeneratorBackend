import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from './roles/user-roles.model';
import { Role } from './roles/roles.model';
import { User } from './user/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USERNAME,
      port: +process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles,],
      autoLoadModels: true,
      sync: { force: true }

    }),
    AuthModule,
    UserModule,
    RolesModule],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }