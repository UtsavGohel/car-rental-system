import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically strip properties that do not have any decorators
      forbidNonWhitelisted: true, // Throw an error if there are non-whitelisted properties in the body
      transform: true, // Automatically transform payloads to be instances of DTOs
    }),
  );

  await app.listen(3000);
}
bootstrap();
