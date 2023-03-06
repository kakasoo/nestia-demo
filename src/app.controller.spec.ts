import { Test, TestingModule } from '@nestjs/testing';
import typia from 'typia';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './models/tables/user.entity';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('typia', () => {
    it('random method test', () => {
      const user = typia.random<{
        name: string;
        nickname: string;
        profileImage?: string | null;
        phoneNumber: string;
        email: string;
        password: string;
        birth?: string | null;
        gender?: boolean | null;
        smsAdsConsent: boolean;
        emailAdsConsent: boolean;
        status: boolean;
      }>();

      expect(user).toBeDefined();
    });

    it('random method test ( Pick<T, ALL_PROPERTIES> )', () => {
      // All properties excluding id and timestamp cloumns.
      const user =
        typia.random<
          Pick<
            UserEntity,
            | 'name'
            | 'nickname'
            | 'profileImage'
            | 'phoneNumber'
            | 'email'
            | 'password'
            | 'birth'
            | 'gender'
            | 'smsAdsConsent'
            | 'emailAdsConsent'
            | 'status'
          >
        >();

      expect(user).toBeDefined();
    });

    it("random method test ( The type I'm actually using)", () => {
      type CreateUserDto = Pick<
        UserEntity,
        | 'name'
        | 'nickname'
        | 'email'
        | 'password'
        | 'phoneNumber'
        | 'birth'
        | 'gender'
        | 'smsAdsConsent'
        | 'emailAdsConsent'
      >;

      const user = typia.random<CreateUserDto>();

      expect(user).toBeDefined();
    });

    it('random method test ( Omit<T, never> )', () => {
      // Occasionally an error occurs. WHY?
      // TypeError: $pick(...) is not a function

      type JustUserType = Omit<UserEntity, never>;
      const user = typia.random<JustUserType>();

      expect(user).toBeDefined();
    });

    it('random method test ( Just UserEntity )', () => {
      // Occasionally an error occurs. WHY?
      // TypeError: $pick(...) is not a function

      const user = typia.random<UserEntity>();

      expect(user).toBeDefined();
    });

    it('random method test ( id and timestamp columns )', () => {
      const user =
        typia.random<
          Pick<UserEntity, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
        >();

      console.log(user);
      expect(user).toBeDefined();
    });

    it('random method test ( id and timestamp columns 2 )', async () => {
      const user = typia.random<{
        id: number;
        createdAt: string;
        updatedAt: string;
      }>();

      expect(user).toBeDefined();
    });
  });
});
