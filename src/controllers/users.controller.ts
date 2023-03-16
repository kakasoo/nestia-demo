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
   * 제목
   * @tag tag_test
   */
  @TypedRoute.Get('c')
  getHello8(): 'hello8' {
    return 'hello8';
  }

  /**
   * 제목이 길어야 나오는 것인지 테스트
   *
   */
  @TypedRoute.Get('b')
  getHello7(): 'hello7' {
    return 'hello7';
  }

  /**
   * 제목
   *
   */
  @TypedRoute.Get('a')
  getHello6(): 'hello6' {
    return 'hello6';
  }

  /**
   * 제목
   *
   */
  @TypedRoute.Get('5')
  getHello5(): string {
    // NOTE : 리턴 타입이 string인 경우
    return 'hello5';
  }

  /**
   * 제목
   *
   */
  @TypedRoute.Get('4')
  getHello4(): 'hello4' {
    // NOTE : 제목에 줄 바꿈 문자가 하나 더 들어간 경우
    return 'hello4';
  }

  /**
   * 제목
   */
  @TypedRoute.Get('3')
  getHello3(): 'hello3' {
    // NOTE : 오로지 제목만 있는 경우
    return 'hello3';
  }

  /**
   * 제목
   * 내용
   * @returns 리턴이 작성된 경우
   */
  @TypedRoute.Get('2')
  getHello2(): 'hello2' {
    return 'hello2';
  }

  /**
   * 제목
   * 내용
   * @returns
   */
  @TypedRoute.Get('1')
  getHello(): 'hello' {
    return 'hello';
  }
}
