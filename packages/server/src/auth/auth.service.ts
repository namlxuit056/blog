import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email, password): Promise<string> {
    const userLogin = await this.usersService.findOneByEmail(email);
    const hashPassword = crypto.createHmac('sha256', password).digest('hex');
    if (userLogin.password === hashPassword) {
      const user: JwtPayload = { email };
      return this.jwtService.sign(user);
    }
    return null;
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findOneByEmail(payload.email);
  }
}
