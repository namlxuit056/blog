import { Field, ID, ObjectType } from 'type-graphql';

export interface UserData {
  username: string;
  fullName: string;
  email: string;
  password: string;
  gender: boolean;
  phone: string;
}
