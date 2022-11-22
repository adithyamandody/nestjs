import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}
  @Post('/login')
  async login(@Body() loginDto: any) {
    const user = await this.userService.findbyemail(loginDto.email);
    if (user) {
      if (user.password === loginDto.password) {
        return user;
      } else {
        return 'password dont match';
      }
    } else {
      return 'unauth';
    }
  }
}
