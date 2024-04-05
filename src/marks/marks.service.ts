import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mark } from './schema/mark.schema';
import { Model } from 'mongoose';
import { CreateMarkDTO } from './dto/mark.dto';

@Injectable()
export class MarksService {
    constructor(@InjectModel(Mark.name) private markModel:Model<Mark>){}

    async createMark(createMark: CreateMarkDTO) : Promise<Mark>{
        try {
            const mark =new this.markModel(createMark);
            return mark.save()
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException()
        }
    }

    async findAll() : Promise<Mark[]>{
        return await this.markModel.find().exec()
    }

    async findOneMark(markId:number) : Promise<Mark>{
        try {
            const mark =await this.markModel.findOne({idMark:markId}).exec()
            return mark
        } catch (error) {
            console.log(error)
        }
    }

    async deleteMark(markId:number) : Promise<Mark>{
        try {
            const mark =await this.markModel.findOneAndDelete({idMark:markId}).exec()
            return mark
        } catch (error) {
            console.log(error)
        }
    }
}
