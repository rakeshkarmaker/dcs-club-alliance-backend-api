import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsString, MaxLength, MinLength } from "class-validator"

export class CreateEventcategoryDto {

    @ApiProperty({
        description: 'This is the event id',
        example: 1,
    })    
    @IsInt()
    eventId
    

    @ApiProperty({
        description: 'This is the category name',
        example: 'Sports',
    })
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    category

    @IsString()
    @ApiProperty({
        description: 'This is the event category description',
        example: 'This category includes all sports-related events.',
    })
    @MinLength(5)
    @MaxLength(500)
   description
}
