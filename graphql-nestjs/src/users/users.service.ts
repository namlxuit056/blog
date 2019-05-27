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

  // async create(data: UserEntity): Promise<UserEntity> {
  //   const createdUser = this.userRepository.create(data);
  //   return await this.userRepository.save(createdUser);
  // }

  // async findOneById(id: string): Promise<UserEntity> {
  //   return await this.userRepository.findOne(id);
  // }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  // async remove(id: string): Promise<boolean> {
  //   const user = await this.userRepository.findOneAndDelete({ id });
  //   if (user) {
  //     return true;
  //   }
  //   return false;
  // }

  // async update(id: string, data: UserEntity): Promise<boolean> {
  //   const user = await this.userRepository.findOneAndUpdate(
  //     { id },
  //     { $set: data },
  //   );
  //   if (user) {
  //     return true;
  //   }
  //   return false;
  // }
}
