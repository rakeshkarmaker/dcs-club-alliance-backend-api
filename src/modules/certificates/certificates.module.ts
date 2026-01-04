import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { CertificatesRepository } from './repositories/certificates.repository';

 //3.3.0- Implemented
@Module({
  controllers: [CertificatesController],
  providers: [CertificatesService,
    {
      provide: 'ICertificatesRepository',
      useClass: CertificatesRepository,
    }
  ],
})
export class CertificatesModule {}
