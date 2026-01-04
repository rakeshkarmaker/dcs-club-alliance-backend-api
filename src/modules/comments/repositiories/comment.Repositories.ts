import { BaseRepository } from "../../../common/repositories/base.repository";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dto";
import { ICommentsRepository } from "../interfaces/icomment.Repositories";
import { PrismaService } from '../../../prisma/prisma.service';




export class CommentRepositories extends BaseRepository<Comment,CreateCommentDto,UpdateCommentDto> implements ICommentsRepository{
    constructor(private readonly prismaService: PrismaService){
        super(prismaService.comment); // Here Super is required to call the BaseRepository constructor with the Prisma model
    }
    
}