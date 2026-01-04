import { PartialType } from '@nestjs/swagger';
import { CreateLoginactivityDto } from './create-loginactivity.dto';
 //3.3.0- Implemented
export class UpdateLoginactivityDto extends PartialType(CreateLoginactivityDto) {}
