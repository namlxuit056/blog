import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { PostSchema } from '../schemas/post.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  providers: [PostsResolver, PostsService, DateScalar],
})
export class PostsModule {}
