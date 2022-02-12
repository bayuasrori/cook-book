import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators';
import { SigninLocalInput, SignUpLocalInput } from '../graphql';
import { UseGuards } from '@nestjs/common';
import { RtGuard } from '../common/guards';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation('signUpLocal')
  signUpLocal(@Args('signUpLocalInput') signUpLocalInput: SignUpLocalInput) {
    return this.authService.signupLocal(signUpLocalInput);
  }

  @Public()
  @Mutation('signinLocal')
  signinLocal(@Args('loginInput') loginInput: SigninLocalInput) {
    return this.authService.signinLocal(loginInput);
  }

  @Public()
  @UseGuards(RtGuard)
  @Mutation('refreshToken')
  refreshToken(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Mutation('logOut')
  logOut(@GetCurrentUserId() userId: number) {
    return this.authService.logout(userId);
  }
}
