import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports:[
    AuthService, JwtModule
  ],
  imports:[
    forwardRef(()=>UserModule),
    JwtModule.register({
      secret:"SECRET_VALUE",
      signOptions:{
        expiresIn:10000
      }
    })
  ]
})
export class AuthModule {}
