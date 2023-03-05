import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
