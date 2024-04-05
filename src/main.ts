import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://127.0.0.1:5500/index.html',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: '*', 
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    maxAge: 3600,
    
  });
  await app.listen(3000);
}
bootstrap();
