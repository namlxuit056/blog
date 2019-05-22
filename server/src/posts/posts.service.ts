import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { NewPostInput } from './dto/new-post.input';
import { PostsArgs } from './dto/posts.args';
import { Post } from './models/post';
import { DateScalar } from '../common/scalars/date.scalar';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly catModel: Model<Post>) {}
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewPostInput): Promise<Post> {
    const creatPost = new this.postModel(data);
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
