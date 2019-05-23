import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersArgs } from './dto/users.args';
import { UserData } from './models/user';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

const pubSub = new PubSub();

@Resolver(of => UserData)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Query(returns => [User])
  async users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return this.usersService.findAll(usersArgs);
  }

  @UseGuards(AuthGuard)
  @Mutation(returns => User)
  async addUser(@Args('newUserData') newUserData: NewUserInput): Promise<User> {
    const user = await this.usersService.create(newUserData);
    pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation(returns => Boolean)
  async removeUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }

  @Mutation(returns => Boolean)
  async updateUser(@Args('id') id: string, @Args('data') data: NewUserInput) {
    return this.usersService.update(id, data);
  }
  @Subscription(returns => User)
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }
}
