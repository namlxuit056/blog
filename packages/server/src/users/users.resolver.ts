import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('user')
  async user(@Args('id') id: string): Promise<UserEntity> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Query('findOneByEmail')
  async findOneByEmail(@Args('email') email: string): Promise<UserEntity> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(email);
    }
    return user;
  }

  @Query('users')
  @UseGuards(JwtAuthGuard)
  async users(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Mutation('createUser')
  async createUser(
    @Args('user') user: UserEntity,
  ): Promise<UserEntity | Error> {
    return await this.usersService.create(user);
  }

  @Mutation('removeUser')
  async removeUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }

  @Mutation('updateUser')
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UserEntity,
  ): Promise<boolean | Error> {
    return this.usersService.update(id, data);
  }
}
