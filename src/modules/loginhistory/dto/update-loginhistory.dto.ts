import { PartialType } from '@nestjs/swagger';
import { CreateLoginhistoryDto } from './create-loginhistory.dto';

export class UpdateLoginhistoryDto extends PartialType(CreateLoginhistoryDto) {}
