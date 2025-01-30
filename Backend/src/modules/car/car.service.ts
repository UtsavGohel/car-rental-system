import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { CreateCarReqDto } from './dto/add-car.dto';
import { CarFuelType } from '@prisma/client';
import { GetCarsReqDto } from './dto/get-cars.dto';
import * as moment from 'moment';

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
        minimum_rental_kms_duration: minimumRentalKmsDuration,
        insurance_included: insuranceIncluded,
        fuel_type: fuelType as CarFuelType,
        is_ac_car: isAcCar,
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

  async getAllCars(reqBody: GetCarsReqDto) {
    const {
      city,
      pickup_date,
      pickup_time,
      minimum_rental_hrs_duration: minimumRentalHrsDuration,
      minimum_rental_kms_duration: minimumRentalKmsDuration,
      trip_end_time: tripEndTime,
    } = reqBody;

    const normalizedPickupTime =
      pickup_time && pickup_time.length === 5
        ? `${pickup_time}:00`
        : pickup_time;

    const pickupDateTime = moment(
      `${pickup_date} ${normalizedPickupTime}`,
      'YYYY-MM-DD HH:mm:ss',
    );

    const pickupDateTimeISO = pickupDateTime.toISOString(); // This will give the ISO string in UTC

    const normalizedTripEndTime =
      tripEndTime && tripEndTime.length === 5
        ? `${tripEndTime}:00`
        : tripEndTime;

    const tripEndDateTime = moment(
      `${pickup_date} ${normalizedTripEndTime}`,
      'YYYY-MM-DD HH:mm:ss',
    );

    const tripEndDateTimeISO = tripEndDateTime.toISOString(); // This will give the ISO string in UTC

    const data = await this.prisma.car.findMany({
      where: {
        is_deleted: false,
        city: city ? city : undefined,
        is_available_to_rent: true,
        minimum_rental_kms_duration: minimumRentalKmsDuration,
        minimum_rental_hrs_duration: minimumRentalHrsDuration,
        ...(pickupDateTimeISO && {
          bookings: {
            none: {
              AND: [
                {
                  booking_start_date_time: {
                    lte: pickupDateTimeISO,
                  },
                },
                {
                  booking_end_date_time: {
                    gte: pickupDateTimeISO,
                  },
                },
              ],
            },
          },
        }),

        // ...(pickupDateTimeISO &&
        //   tripEndTime && {
        //     bookings: {
        //       none: {
        //         AND: [
        //           // Ensure the car is not booked during the requested pickup time
        //           {
        //             booking_start_date_time: {
        //               gte: tripEndDateTimeISO, // Ensure the booking starts after the current user's trip ends
        //             },
        //           },
        //           {
        //             booking_end_date_time: {
        //               lte: pickupDateTimeISO, // Ensure the booking ends before the current user's pickup time
        //             },
        //           },
        //           // Ensure the requested pickup time does not overlap with any current booking
        //           {
        //             OR: [
        //               {
        //                 booking_start_date_time: {
        //                   gte: pickupDateTimeISO, // Ensure no bookings start at or after the requested pickup time
        //                 },
        //               },
        //               {
        //                 booking_end_date_time: {
        //                   lte: tripEndDateTimeISO, // Ensure no bookings end before the requested trip end time
        //                 },
        //               },
        //             ],
        //           },
        //         ],
        //       },
        //     },
        //   }),
      },
      select: {
        availability_status: true,
        body: true,
        cancellation_policy: true,
        capacity: true,
        car_image: true,
        city: true,
        fuel_type: true,
        insurance_included: true,
        rating: true,
        is_ac_car: true,
        luggage_capacity: true,
        name: true,
        price_per_km: true,
        minimum_rental_hrs_duration: true,
        minimum_rental_kms_duration: true,
        is_available_to_rent: true,
        bookings: true,
      },
    });

    if (!data) {
      throw new BadRequestException('Unable to fetch car details');
    }

    if (data.length === 0) {
      return {
        message: 'No Car Data Found',
        data: data || [],
      };
    }
    return {
      message: 'Success',
      data: data || [],
    };
  }
}
