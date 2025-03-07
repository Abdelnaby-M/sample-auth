import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const config = new DocumentBuilder() //1
    .setTitle('Sample Auth App')
    .setDescription('The Sample Auth App Api documentation')
    .setVersion('1.0')
    .addBearerAuth(
      // Enable Bearer Auth here
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // We will use this Bearer Auth with JWT-auth name on the controller function
    )
    .build();

  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api-docs', app, document); 

  app.enableCors({ // for Development Only
    origin: "http://localhost:3001", 
    methods: "GET,POST",
    credentials: true,
  })

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT') ?? 3000);
}
bootstrap();
