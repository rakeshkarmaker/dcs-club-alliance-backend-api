import { Inject, Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import type { ICertificatesRepository } from './interfaces/icertificates.repository';

 //3.3.0- Implemented
@Injectable()
export class CertificatesService {
  constructor(@Inject('ICertificatesRepository')
  private readonly certificatesRepository: ICertificatesRepository) { }

  create(createCertificateDto: CreateCertificateDto) {
    return this.certificatesRepository.create(createCertificateDto);
  }

  findAll() {
    return this.certificatesRepository.findAll();
  }

  findOne(id: number) {
    return this.certificatesRepository.findOne(id);
  }

  update(id: number, updateCertificateDto: UpdateCertificateDto) {
    return this.certificatesRepository.update(id, updateCertificateDto);
  }

  remove(id: number) {
    return this.certificatesRepository.delete(id);
  }
}
