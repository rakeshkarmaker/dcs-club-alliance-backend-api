import { Certificate } from '@prisma/client'
import { CreateCertificateDto } from '../dto/create-certificate.dto';
import { UpdateCertificateDto } from '../dto/update-certificate.dto';
import { IRepository } from '../../../common/interfaces/irepository.interface';
 //3.3.0- Implemented
export interface ICertificatesRepository extends IRepository<Certificate,CreateCertificateDto, UpdateCertificateDto> {
}