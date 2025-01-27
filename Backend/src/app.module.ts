import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CarModule } from './modules/car/car.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
