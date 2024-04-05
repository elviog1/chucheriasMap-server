import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'https://660f92ba7125144e20f04958--lucky-croissant-cf361b.netlify.app/',
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
