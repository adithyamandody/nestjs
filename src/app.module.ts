import { Module } from '@nestjs/common';
import { appController } from './app.controller';
import { UserModule } from './user/user.module';

@Module({
  controllers: [appController],
  imports: [UserModule],
})
export class AppModule {}
