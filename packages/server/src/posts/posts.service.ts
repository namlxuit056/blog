import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { NewPostInput } from './dto/new-post.input';
import { PostsArgs } from './dto/posts.args';
import { Post } from './models/post';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectBindingPattern } from 'ts-morph';
@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async create(data: NewPostInput): Promise<Post> {
    const createdPost = new this.postModel(data);
    return await createdPost.save();
  }

  async findOneById(id: string): Promise<Post> {
    return await this.postModel.findOne({ _id: id }).exec();
  }

  async findAll(postsArgs: PostsArgs): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async remove(id: string): Promise<boolean> {
    const post = await this.postModel.findOneAndRemove({ _id: id }).exec();
    if (post) {
      return true;
    }
    return false;
  }

  async update(id: string, data: NewPostInput): Promise<boolean> {
    const post = await this.postModel.findOneAndUpdate(
      { _id: id },
      { $set: data },
    );
    if (post) {
      return true;
    }
    return false;
  }
}
