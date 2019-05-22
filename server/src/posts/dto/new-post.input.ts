import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewPostInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  description?: string;
}
