import { Module } from '@nestjs/common';
import { appController } from './app.controller';

@Module({
  controllers: [appController],
})
export class AppModule {}
