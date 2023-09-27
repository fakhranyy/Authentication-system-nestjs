import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly repo: Repository<User>){}
    async create(data: any): Promise<User> {
    return this.repo.save(data);
    }

    async findOne(condition: any):Promise<User> {
      return this.repo.findOneBy(condition);
    }
 }
