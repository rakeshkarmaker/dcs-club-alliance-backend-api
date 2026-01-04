import { Notice } from "@prisma/client";
import { BaseRepository } from "../../../common/repositories/base.repository";
import { CreateNoticeDto } from "../dto/create-notice.dto";
import { UpdateNoticeDto } from "../dto/update-notice.dto";
import { INoticeRepository } from "../interfaces/inotices.repository";



export class NoticeRepository extends BaseRepository<Notice,CreateNoticeDto, UpdateNoticeDto> implements INoticeRepository {
    // Implement specific methods for Notice repository here
}