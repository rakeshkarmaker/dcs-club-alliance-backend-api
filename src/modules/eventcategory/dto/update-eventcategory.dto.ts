import { PartialType } from '@nestjs/swagger';
import { CreateEventcategoryDto } from './create-eventcategory.dto';

export class UpdateEventcategoryDto extends PartialType(CreateEventcategoryDto) {}
