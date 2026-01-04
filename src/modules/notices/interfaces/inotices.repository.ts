import { Notice } from '@prisma/client';
import { IRepository } from "../../../common/interfaces/irepository.interface";
import { CreateNoticeDto } from '../dto/create-notice.dto';
import { UpdateNoticeDto } from '../dto/update-notice.dto';



export interface INoticeRepository extends IRepository<Notice,CreateNoticeDto, UpdateNoticeDto> {
    // Define specific methods for Notice repository here
}