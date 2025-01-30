import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarReqDto } from './dto/add-car.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetCarsReqDto } from './dto/get-cars.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async createUser(@Request() req: any, @Body() reqBody: CreateCarReqDto) {
    return this.carService.createCar(req.user.id, reqBody);
  }

  @Post('/get-all-cars')
  @UseGuards(JwtAuthGuard)
  async getAllCars(@Body() reqBody: GetCarsReqDto) {
    return this.carService.getAllCars(reqBody);
  }
}
