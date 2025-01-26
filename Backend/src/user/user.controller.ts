import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserReqDto } from './user.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  async createUser(@Body() reqBody: UserReqDto) {
    return this.userService.createUser(reqBody);
  }

  // @UseGuards(JwtAuthGuard)

  // Protected route, only accessible by 'admin' role
  // @Roles('admin')
  // @UseGuards(RolesGuard)
  // @Get('admin')
  // getAdminData() {
  //   return { message: 'Admin data' };
  // }
}
