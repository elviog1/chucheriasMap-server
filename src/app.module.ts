import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarksModule } from './marks/marks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({useFactory: ()=>({
      uri: process.env.DATABASE_MONGODB
    })}),
    MarksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
