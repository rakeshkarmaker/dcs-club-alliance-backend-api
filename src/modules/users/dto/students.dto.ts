import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsString } from 'class-validator';

export class createStudentDto {
  @IsString()
  readonly rollNumber!: string;

  @IsString()
  className!: string;

  @IsString()
  readonly classSection!: string;

  @IsString()
  readonly idCardPic!: string;

  @IsDate()
  readonly createdAt!: Date;
}

export class updateStudentDto extends PartialType(createStudentDto) {}
