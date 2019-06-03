import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import { IsEmail, Validate } from 'class-validator';
import * as crypto from 'crypto';

@Entity('user')
export class UserEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  fullName: string;

  @Column()
  gender: boolean;

  @Column()
  phone: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
}
