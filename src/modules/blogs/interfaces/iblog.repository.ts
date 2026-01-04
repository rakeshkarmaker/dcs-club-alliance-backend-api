import { Blog } from "@prisma/client";
import { IRepository } from "../../../common/interfaces/irepository.interface";
import { CreateBlogDto } from "../dto/create-blog.dto";
import { UpdateBlogDto } from "../dto/update-blog.dto";
 //3.3.0- Interface for BlogRepository


export interface IBlogRespository extends IRepository<Blog, CreateBlogDto, UpdateBlogDto> {
  // Interface for BlogRepository
}
