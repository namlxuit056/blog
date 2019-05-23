import { verify } from 'jsonwebtoken';

export interface IAuthInfo {
  fullName?: string;
  role?: string;
  iat?: number;
  exp?: number;
  sub?: string;
}

export const jwtSecret = process.env.JWT_SECRET;
export const jwtDefaultExpire = 3600 * 48;
