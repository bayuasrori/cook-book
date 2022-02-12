import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayloadWithRt } from '../../auth/types';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GetCurrentUser = createParamDecorator(
  (data: keyof JwtPayloadWithRt | undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    console.log(ctx.getContext().req.user);
    if (!data) return ctx.getContext().req.user;
    return ctx.getContext().req.user[data];
  },
);
