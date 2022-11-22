import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appController } from './app.controller';
import { UserModule } from './user/user.module';

@Module({
  controllers: [appController],
  imports: [
    UserModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
