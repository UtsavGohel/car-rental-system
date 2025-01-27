import { Controller, Post, Body, UseGuards, Param } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserReqDto } from './dto/add-user.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  // @UseGuards(JwtAuthGuard)
  async createUser(@Body() reqBody: UserReqDto) {
    return this.userService.createUser(reqBody);
  }

  @Post(':id/detail')
  @UseGuards(JwtAuthGuard)
  async getUserDetail(@Param('id') id: number) {
    return this.userService.getUserDetail(id);
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
