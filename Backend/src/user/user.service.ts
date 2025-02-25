import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { UserReqDto } from './dto/add-user.dto';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(reqBody: UserReqDto) {
    if (reqBody.email) {
      const isExist = await this.prisma.user.findFirst({
        where: {
          OR: [
            { email: reqBody.email },
            { contact_number: reqBody.contact_number },
          ],
        },
      });

      if (isExist) {
        throw new BadRequestException('Email OR Mobile Number Alreay Exist');
      }
    }

    // Hash the password before saving to the database
    const hashedPassword = await hash(reqBody.password, 10); // 10 is the salt rounds

    const data = await this.prisma.user.create({
      data: {
        name: reqBody.name,
        email: reqBody.email,
        password: hashedPassword, // Store hashed password
        city: reqBody.city,
        contact_number: reqBody.contact_number,
        user_role: reqBody.user_role,
      },
    });

    if (!data) {
      throw new BadRequestException('Error while adding user');
    }
    return {
      message: 'Saved',
      user_id: data.id,
    };
  }
  async getUserDetail(id: number) {
    const data = await this.prisma.user.findUnique({
      where: { id: id },
      select: {
        name: true,
        email: true,
        user_role: true,
        contact_number: true,
        city: true,
        cars: true,
      },
    });

    if (!data) {
      throw new BadRequestException("User doesn't exisr");
    }
    return {
      data: data,
    };
  }
}
