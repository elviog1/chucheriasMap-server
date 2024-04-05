import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Mark {

    @Prop()
    idMark:number
    
    @Prop()
    title:string;

    @Prop()
    category:string;

    @Prop()
    lat:number;

    @Prop()
    lng:number;

    @Prop()
    popupContent: string
}

export type MarkDocument = HydratedDocument<Mark>
export const MarkSchema = SchemaFactory.createForClass(Mark)