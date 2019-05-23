import { IsOptional, Length, MaxLength, IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  gender: boolean;

  @IsNotEmpty()
  phone: string;
}
