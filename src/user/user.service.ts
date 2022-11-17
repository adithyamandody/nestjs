import { Get, Injectable } from '@nestjs/common';
import { updateUserDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'adithya', email: 'hello@kfas.com' };
  }
  create(body: any) {
    return body;
  }
  update(updateUserDto: updateUserDto, param: { userId: number }) {
    return { body: updateUserDto, param };
  }
  show(userId: number) {
    return { userId };
  }
  delete(param: { userId: number }) {
    return param;
  }
}
