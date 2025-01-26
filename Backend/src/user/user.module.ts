import { Module } from '@nestjs/common';
import { UserService } from './user.service'; // Import the UserService
import { UserController } from '../user/user.controller'; // Import the UserController
import { PrismaService } from '../prisma/prisma.service'; // Import the PrismaService

@Module({
  imports: [],
  controllers: [UserController], // Register the UserController
  providers: [UserService, PrismaService], // Register the UserService and PrismaService
})
export class UserModule {}
