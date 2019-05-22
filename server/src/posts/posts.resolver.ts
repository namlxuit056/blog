import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewPostInput } from './dto/new-post.input';
import { PostsArgs } from './dto/posts.args';
import { Post } from './models/post';
import { PostsService } from './posts.service';

const pubSub = new PubSub();

@Resolver(of => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(returns => Post)
  async post(@Args('id') id: string): Promise<Post> {
    const post = await this.postsService.findOneById(id);
    if (!post) {
      throw new NotFoundException(id);
    }
    return post;
  }

  @Query(returns => [Post])
  posts(@Args() postsArgs: PostsArgs): Promise<Post[]> {
    return this.postsService.findAll(postsArgs);
  }

  @Mutation(returns => Post)
  async addPost(@Args('newPostData') newPostData: NewPostInput): Promise<Post> {
    const post = await this.postsService.create(newPostData);
    pubSub.publish('postAdded', { postAdded: post });
    return post;
  }

  @Mutation(returns => Boolean)
  async removePost(@Args('id') id: string) {
    return this.postsService.remove(id);
  }

  @Subscription(returns => Post)
  postAdded() {
    return pubSub.asyncIterator('postAdded');
  }
}
