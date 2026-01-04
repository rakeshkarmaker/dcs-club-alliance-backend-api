import { Certificate } from "@prisma/client"
import { CreateCertificateDto } from "../dto/create-certificate.dto";
import { UpdateCertificateDto } from "../dto/update-certificate.dto";
import { ICertificatesRepository } from "../interfaces/icertificates.repository";
import { BaseRepository } from "../../../common/repositories/base.repository";



export class CertificatesRepository  extends BaseRepository<Certificate, CreateCertificateDto, UpdateCertificateDto> implements ICertificatesRepository {
//3.3.0- Implementation of CertificatesRepository
}