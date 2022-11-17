import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { create } from 'domain';
import { Request } from 'express';
import { updateUserDto } from './dto/user-update.dto';
import { createUserDto } from './dto/user-create.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private UserService: UserService) {}
  @Get()
  getuser() {
    return this.UserService.get();
  }
  @Post()
  store(@Body() createUserDto: createUserDto) {
    return this.UserService.create(createUserDto);
  }
  @Patch('/:userId')
  update(
    @Body() updateUserDto: updateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.UserService.update(updateUserDto, userId);
  }
  @Get()
  getusers(@Param('userId', ParseIntPipe) userId: number) {
    return this.UserService.show(userId);
  }
  @Delete()
  deleteUser(@Param() param: { userId: number }) {
    return this.UserService.delete(param);
  }
}
