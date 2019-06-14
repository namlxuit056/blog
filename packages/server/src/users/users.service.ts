import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { MongoRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: MongoRepository<UserEntity>,
  ) {}

  async create(data: UserEntity): Promise<UserEntity | Error> {
    const existUser = await this.userRepository.findOne({ email: data.email });
    if (existUser) {
      return new Error('Email is exist');
    }

    const createdUser = this.userRepository.create(data);
    return await this.userRepository.save(createdUser);
  }

  async findOneById(id: string): Promise<UserEntity> {
    return await this.userRepository.findOne(id);
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async remove(id: string): Promise<boolean> {
    const user = await this.userRepository.findOne(id);
    try {
      await this.userRepository.delete(user);
    } catch (error) {
      return error;
    }
    return true;
  }

  async update(id: string, data: UserEntity): Promise<boolean | Error> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      return new Error('User is not exist');
    }
    Object.assign(user, data);
    const result = await this.userRepository.save(user);
    if (!result) {
      return false;
    }
    return true;
  }
}
