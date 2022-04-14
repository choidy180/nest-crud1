import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async getAllusers(): Promise<User []>{
    return await this.userRepository.find();
  }

  async findUser(id: string): Promise<User>{
    return await this.userRepository.findOne({ userId: id })
  }
}
