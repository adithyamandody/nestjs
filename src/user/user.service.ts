import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/user-create.dto';
import { updateUserDto } from './dto/user-update.dto';
import { user } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user)
    private userRepository: Repository<user>,
  ) {}
  get(): Promise<user[]> {
    return this.userRepository.find();
  }
  create(createUserDto: createUserDto) {
    return this.userRepository.save(createUserDto);
  }
  update(updateUserDto: updateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }
  show(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
  findbyemail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  delete(param: { userId: number }) {
    return param;
  }
}
