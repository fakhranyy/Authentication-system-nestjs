import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // عشان اشغل الريبو
    JwtModule.register({
    secret: 'string',
    signOptions: {expiresIn: '1d'},
    global: true 
  }),
], 
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
