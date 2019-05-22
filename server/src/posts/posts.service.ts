import { Injectable } from '@nestjs/common';
import { NewPostInput } from './dto/new-post.input';
import { PostsArgs } from './dto/posts.args';
import { Post } from './models/post';
import { DateScalar } from '../common/scalars/date.scalar';
@Injectable()
export class PostsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewPostInput): Promise<Post> {
    const post = Object.assign(data, { id: '1', creationDate: new Date() });
    return post;
  }

  async findOneById(id: string): Promise<Post> {
    return {} as any;
  }

  async findAll(postsArgs: PostsArgs): Promise<Post[]> {
    return [] as Post[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
