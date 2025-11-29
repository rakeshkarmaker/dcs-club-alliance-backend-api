import { IsDate, isDate, IsString } from "class-validator";

export class CreateEventDto {

//       clubId      Int      @map("club_id")
//   title       String
//   description String
//   startTime   DateTime @map("start_time")
//   endTime     DateTime @map("end_time")
//   venue       String
//   fee         Float
//   formLink    String?  @map("form_link")
//   isFree    Boolean  @default(true) @map("is_free")
//   isActive  Boolean  @default(true) @map("is_active")
    
    clubId: number;
    
    @IsString()
    title: string;

    @IsString()
    description: string;
    @IsDate()
    startTime: Date;
    @IsDate()
    endTime: Date;

    @IsString()
    formLink?: string;

    @IsString()
    venue: string;

    isFree?: boolean;
    isActive?: boolean;
    
    fee: number;
}
