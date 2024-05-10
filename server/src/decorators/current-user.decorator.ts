import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Users } from 'src/users/entity/users.entity';

export const CurrentUser = createParamDecorator(
  (_data, ctx: ExecutionContext): any => {
    const request = ctx.switchToHttp().getRequest();
    if (_data) {
      console.log(request.user[_data]);
      return request.user[_data];
    }
    return request.user;
  },
);
