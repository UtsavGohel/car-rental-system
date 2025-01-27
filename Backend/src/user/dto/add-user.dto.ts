import {
  IsEmail,
  IsString,
  IsEnum,
  IsBoolean,
  IsOptional,
  Length,
  IsNotEmpty,
} from 'class-validator';

import { UserRole } from '../user.role';

export class UserReqDto {
  @IsNotEmpty() // Ensures this field is not empty
  @IsEmail() // Validates email format
  email!: string;

  @IsNotEmpty() // Ensures this field is not empty
  @IsString() // Ensures it's a string
  @Length(1, 100) // Optionally, you can set a length constraint
  name: string;

  @IsNotEmpty() // Ensures this field is not empty
  @IsString() // Ensures it's a string
  @Length(6, 100) // Ensure the password has a minimum length
  password: string;

  @IsNotEmpty() // Ensures this field is not empty
  @IsString() // Ensures it's a string
  city: string;

  @IsNotEmpty() // Ensures this field is not empty
  @IsString() // Ensures it's a string
  @Length(10, 15) // Assuming the contact number is between 10-15 characters
  contact_number: string;

  @IsNotEmpty() // Ensures this field is not empty
  @IsEnum(UserRole) // Ensures the value is one of the enum values
  user_role: UserRole;

  @IsBoolean() // Ensures it's a boolean value
  @IsOptional() // This makes the `is_deleted` optional
  is_deleted?: boolean;
}
