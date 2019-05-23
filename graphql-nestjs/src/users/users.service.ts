import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersArgs } from './dto/users.args';
import { UserData } from './models/user';
import { UserEntity } from './user.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: MongoRepository<UserEntity>,
  ) {}

  async create(data: CreateUserDto): Promise<UserData> {
    const createdUser = this.userRepository.create(data);
    return await this.userRepository.save(createdUser);
  }

  async findOneById(id: string): Promise<UserData> {
    return await this.userRepository.findOne(id);
  }

  async findAll(usersArgs: UsersArgs): Promise<UserData[]> {
    return await this.userRepository.find();
  }

  async remove(id: string): Promise<boolean> {
    const user = await this.userRepository.findOneAndDelete({ id });
    if (user) {
      return true;
    }
    return false;
  }

  async update(id: string, data: UserData): Promise<boolean> {
    const user = await this.userRepository.findOneAndUpdate(
      { id },
      { $set: data },
    );
    if (user) {
      return true;
    }
    return false;
  }
}
