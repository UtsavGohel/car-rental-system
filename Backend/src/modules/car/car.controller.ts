import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarReqDto } from './dto/add-car.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async createUser(@Request() req: any, @Body() reqBody: CreateCarReqDto) {
    return this.carService.createCar(req.user.id, reqBody);
  }
}
