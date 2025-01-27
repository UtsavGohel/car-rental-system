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

export enum CarStatus {
  available = 'available',
  booked = 'booked',
  maintenance = 'maintenance',
  other = 'other',
}

export enum FuelType {
  petrol = 'petrol',
  diesel = 'diesel',
  electric = 'electric',
}

export class CreateCarReqDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;

  @IsOptional()
  @IsString()
  rating?: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsString()
  @Length(0, 500)
  body: string;

  @IsNotEmpty()
  @IsString()
  capacity: string;

  @IsBoolean()
  is_ac_car: boolean;

  @IsString()
  @IsString()
  luggage_capacity: string;

  @IsBoolean()
  is_available_to_rent: boolean;

  // @IsOptional()
  // @IsDateString()
  // rent_start_date_time?: string;

  // @IsOptional()
  // @IsDateString()
  // rent_end_date_time?: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price_per_km: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  car_owner_id: number;

  @IsString()
  car_image: string;

  @IsEnum(CarStatus)
  availability_status: CarStatus;

  @IsString()
  minimum_rental_hrs_duration: string;

  @IsString()
  minimum_rental_kms_duration: string;

  @IsBoolean()
  insurance_included: boolean;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  cancellation_policy?: string;

  @IsNotEmpty()
  @IsEnum(FuelType)
  fuel_type: FuelType;
}
