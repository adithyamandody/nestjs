import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appController } from './app.controller';
import { user } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

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
      entities: [user],
      synchronize: true,
    }),

    AuthModule,
  ],
})
export class AppModule {}
