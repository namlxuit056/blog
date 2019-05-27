import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserEntity } from './user.entity';

const pubSub = new PubSub();

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // @Query('user')
  // async user(@Args('id') id: string): Promise<UserEntity> {
  //   const user = await this.usersService.findOneById(id);
  //   if (!user) {
  //     throw new NotFoundException(id);
  //   }
  //   return user;
  // }

  @Query('users')
  async users(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  // @UseGuards(AuthGuard)
  // @Mutation('addUser')
  // async addUser(
  //   @Args('newUserData') newUserData: UserEntity,
  // ): Promise<UserEntity> {
  //   const user = await this.usersService.create(newUserData);
  //   pubSub.publish('userAdded', { userAdded: user });
  //   return user;
  // }

  // @Mutation(returns => Boolean)
  // async removeUser(@Args('id') id: string) {
  //   return this.usersService.remove(id);
  // }

  // @Mutation(returns => Boolean)
  // async updateUser(@Args('id') id: string, @Args('data') data: UserEntity) {
  //   return this.usersService.update(id, data);
  // }
  // @Subscription(returns => UserEntity)
  // userAdded() {
  //   return pubSub.asyncIterator('userAdded');
  // }
}
