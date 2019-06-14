import {
  Entity,
  Column,
  BeforeInsert,
} from 'typeorm';

import { IsEmail, IsNotEmpty} from 'class-validator';
import * as crypto from 'crypto';
import { BaseEntity } from '../base/base.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  username: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
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
