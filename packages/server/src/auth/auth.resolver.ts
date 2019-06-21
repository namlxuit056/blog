import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UnauthorizedException } from '@nestjs/common';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('signIn')
  async signIn(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string> {
    return this.authService.signIn(email, password);
  }
}
