import { ApolloError } from 'apollo-server-express';

export class User {
  // tslint:disable-next-line:variable-name
  _id: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  gender: string;
  phone: string;

  constructor(args: any) {
    this._id = args._id;
    this.username = args.username;
    this.password = args.password;
    this.email = args.email;
    this.fullName = args.fullName;
    this.gender = args.gender;
    this.phone = args.phone;
  }
}
// tslint:disable-next-line:max-classes-per-file
export abstract class IQuery {
  abstract getUsers(): User[] | Promise<User[] | ApolloError> | ApolloError;
}
