import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post } from '@nestjs/common';
import { MarksService } from './marks.service';
import { CreateMarkDTO } from './dto/mark.dto';
import { Mark } from './schema/mark.schema';

@Controller('marks')
export class MarksController {
    constructor(private readonly marksService:MarksService){}

    @Post()
    async createMark(@Body() createMark: CreateMarkDTO) : Promise<Mark>{
        try {
            const mark = await this.marksService.createMark(createMark)
            return mark
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException()
        }
    }

    @Get()
    async findAll() : Promise<Mark[]>{
        return this.marksService.findAll()
    }

    @Get('/:idMark')
    async findOneMark(@Param('idMark') idMark : number) :Promise<Mark>{
        return this.marksService.findOneMark(idMark)
    }

    @Delete(':idMark')
    async deleteMark(@Param('idMark') idMark:number): Promise<Mark>{
        return this.marksService.deleteMark(idMark)
    }
}
