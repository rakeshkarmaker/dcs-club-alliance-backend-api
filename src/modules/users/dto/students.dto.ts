import { PartialType } from "@nestjs/mapped-types";
import { IsDate, IsString } from "class-validator";




export class createStudentDto {
    @IsString()
    rollNumber:string;

    @IsString()
    className:string;

    @IsString()
    classSection:string;

    @IsString()
    idCardPic:string;


    @IsDate()
    createdAt:Date;

}

export class updateStudentDto extends PartialType(createStudentDto) {}