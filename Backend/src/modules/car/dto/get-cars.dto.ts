import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsEnum,
  IsBoolean,
  IsOptional,
  Length,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class GetCarsReqDto {
  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  pickup_date: string; // Format: YYYY-MM-DD HH:mm:ss

  @IsOptional()
  @IsString()
  pickup_time: string; // Format: YYYY-MM-DD HH:mm:ss

  @IsOptional()
  @IsString()
  minimum_rental_hrs_duration: string;

  @IsOptional()
  @IsString()
  minimum_rental_kms_duration: string;

  @IsOptional()
  @IsString()
  trip_end_time: string;

  // @IsString()
  // @Length(0, 500)
  // body: string;

  // @IsNotEmpty()
  // @IsString()
  // capacity: string;

  // @IsBoolean()
  // is_ac_car: boolean;

  // @IsString()
  // @IsString()
  // luggage_capacity: string;

  // @IsBoolean()
  // is_available_to_rent: boolean;

  // @IsOptional()
  // @IsDateString()
  // rent_start_date_time?: string;

  // @IsOptional()
  // @IsDateString()
  // rent_end_date_time?: string;

  // @IsNotEmpty()
  // @IsNumber()
  // @IsPositive()
  // price_per_km: number;

  // @IsOptional()
  // @IsNumber()
  // @IsPositive()
  // car_owner_id: number;

  // @IsString()
  // car_image: string;

  // @IsBoolean()
  // insurance_included: boolean;

  // @IsOptional()
  // @IsString()
  // @Length(0, 500)
  // cancellation_policy?: string;
}
