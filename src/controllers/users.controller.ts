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

  /**
   * correct case :
   * There is no problem at the moment if I let the same function receive data through body.
   * The problem is the case bellow.
   */
  @TypedRoute.Post('follow1')
  async follow1(
    @UserId() userId: number,
    @TypedBody() { followerId }: FollowUserDto,
  ): Promise<true> {
    console.log(`user${userId} started following user${followerId}`);
    return true;
  }

  /**
   * error case :
   * In my opinion, in POST functions where only parameters exist, the method is not deduced to POST.
   */
  @TypedRoute.Post(':id/follow2')
  async follow2(
    @UserId() userId: number,
    @TypedParam('id', 'number') followerId: number,
  ): Promise<true> {
    console.log(`user${userId} started following user${followerId}`);
    return true;
  }
}
