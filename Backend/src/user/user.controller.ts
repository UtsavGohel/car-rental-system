import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from '../user/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
