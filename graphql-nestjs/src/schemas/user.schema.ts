import { AppolloError } from 'apollo-server-express';

export class User {
  id?: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  gender: string;
  phone: string;
}
// tslint:disable-next-line:max-classes-per-file
export abstract class IQuery {
  abstract getUsers(): User[] | Promise<User[] | AppolloError> | AppolloError;
}
