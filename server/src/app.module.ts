import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    PostsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class ApplicationModule {}
