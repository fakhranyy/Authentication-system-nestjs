import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8886,
      username: 'root',
      password: 'password',
      database: 'auth',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}