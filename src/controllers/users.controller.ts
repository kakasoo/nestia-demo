import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { UserId } from '../decorators/user-id.decorator';

export interface FollowUserDto {
  /**
   * userId to follow
   */
  followerId: number;
}

@Controller('api/v1/user')
export class UsersController {
  constructor() {}

  @TypedRoute.Get()
  getHello(): 'hello' {
    return 'hello';
  }
}
