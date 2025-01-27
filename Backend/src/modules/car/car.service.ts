import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { CreateCarReqDto } from './dto/add-car.dto';
import { CarFuelType } from '@prisma/client';

@Injectable()
export class CarService {
  constructor(private readonly prisma: PrismaService) {}

  async createCar(userId: number, reqBody: CreateCarReqDto) {
    if (!userId) {
      throw new BadRequestException('Missing User ID');
    }

    const {
      name,
      city,
      capacity,
      price_per_km: pricePerKm,
      body,
      luggage_capacity: luggageCapacity,
      is_available_to_rent: isAvailableToRent,
      availability_status: availabilityStatus,
      minimum_rental_hrs_duration: minimumRentalHrsDuration,
      minimum_rental_kms_duration: minimumRentalKmsDuration,
      insurance_included: insuranceIncluded,
      fuel_type: fuelType,
      is_ac_car: isAcCar,
      car_image: carImage,
      cancellation_policy: cancellationPolicy,
      rating,
    } = reqBody;

    const data = await this.prisma.car.create({
      data: {
        name: name,
        city: city,
        capacity: capacity,
        price_per_km: pricePerKm,
        body: body,
        luggage_capacity: luggageCapacity,
        is_available_to_rent: isAvailableToRent,
        availability_status: availabilityStatus,
        minimum_rental_hrs_duration: minimumRentalHrsDuration,
        minimum_rental_kms_duration: '',
        insurance_included: true,
        fuel_type: fuelType as CarFuelType,
        is_ac_car: true,
        car_image: carImage || 'NA',
        cancellation_policy: cancellationPolicy || 'NA',
        rating: rating || null,

        car_owner: {
          connect: {
            id: Number(userId), // Use `connect` to link the car to an existing user
          },
        },
        is_deleted: false,
      },
    });

    if (!data) {
      throw new BadRequestException('Error while adding car details');
    }
    return {
      message: 'Saved',
      user_id: data.id,
    };
  }
}
