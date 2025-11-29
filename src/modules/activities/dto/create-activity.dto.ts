import { IsEmail, MaxLength, IsString, IsDate, IsNumber } from "class-validator";

export class CreateActivityDto {
    
    @IsNumber()
    userId: number;

    @IsDate()
    loggedIn: Date;

    @IsString()
    @MaxLength(45)
    ipAddress:string;

    @IsString()
    @MaxLength(100)
    location?: string;

    @IsString()
    @MaxLength(255)
    device?: string;

}
