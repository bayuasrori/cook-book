import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../../auth/types';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user as JwtPayload;
    return user.sub;
  },
);
