import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from './roles/user-roles.model';
import { Role } from './roles/roles.model';
import { User } from './user/user.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USERNAME,
      port: +process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
      sync: { force: true },
    }),
    AuthModule,
    UserModule,
    RolesModule,
  ],
})
export class AppModule {}
