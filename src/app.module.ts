import { Module } from '@nestjs/common';
import { appController } from './app.controller';
import { userModule } from './User/user.module';

@Module({
  controllers: [appController],
  imports: [userModule],
})
export class AppModule {}
