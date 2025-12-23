import { PartialType } from '@nestjs/swagger';
import { CreateFormresponseDto } from './create-formresponse.dto';

export class UpdateFormresponseDto extends PartialType(CreateFormresponseDto) {}
