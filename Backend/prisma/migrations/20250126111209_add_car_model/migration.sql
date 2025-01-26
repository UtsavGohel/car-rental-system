/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('renter', 'owner', 'admin');

-- CreateEnum
CREATE TYPE "CarStatus" AS ENUM ('available', 'booked', 'maintenance', 'other');

-- CreateEnum
CREATE TYPE "CarFuelType" AS ENUM ('Diesel', 'petrol', 'electric');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_role" "UserRole" NOT NULL DEFAULT 'renter',
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "is_ac_car" BOOLEAN NOT NULL,
    "luggage_capacity" TEXT NOT NULL,
    "is_available_to_rent" BOOLEAN NOT NULL,
    "rent_start_date_time" TIMESTAMP(3) NOT NULL,
    "rent_end_date_time" TIMESTAMP(3) NOT NULL,
    "price_per_km" INTEGER NOT NULL,
    "car_image" TEXT NOT NULL,
    "car_owner_id" INTEGER NOT NULL,
    "availability_status" "CarStatus" NOT NULL,
    "minimum_rental_hrs_duration" TEXT NOT NULL,
    "minimum_rental_kms_duration" TEXT NOT NULL,
    "insurance_included" BOOLEAN NOT NULL,
    "cancellation_policy" TEXT NOT NULL,
    "fuel_type" "CarFuelType" NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_car_owner_id_fkey" FOREIGN KEY ("car_owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
