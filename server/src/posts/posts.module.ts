import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsResolver, PostsService, DateScalar],
})
export class PostsModule {}
