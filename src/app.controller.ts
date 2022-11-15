import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class appController {
  @Get()
  getuser() {
    return { name: 'username', email: 'hello@kfas.com' };
  }
  @Post()
  store(@Req() req: Request) {
    return req.body;
  }
  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }
  @Get()
  getusers(@Param() params: { userId: string }) {
    return params;
  }
  @Delete()
  deleteUser(@Param() params: { userId: string }) {
    return params;
  }
}
