import { IRepository } from "../../../common/interfaces/irepository.interface";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dto";


export interface ICommentsRepository extends IRepository<Comment,CreateCommentDto,UpdateCommentDto>{
    

}