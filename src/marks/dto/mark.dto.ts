import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMarkDTO {
    @IsNumber()
    @IsNotEmpty()
    idMark:number

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    category:string

    @IsNumber()
    @IsNotEmpty()
    lat:number
    
    @IsNumber()
    @IsNotEmpty()
    lng:number

    @IsString()
    @IsNotEmpty()
    popupContent:string
}