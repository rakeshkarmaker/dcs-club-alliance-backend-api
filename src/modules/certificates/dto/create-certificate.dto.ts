import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

 //3.3.0- Implemented
export class CreateCertificateDto {

  @ApiProperty({
    description: 'User ID who receives the certificate',
    example: 25,
  })
  @IsInt()
  userId!: number;

  @ApiProperty({
    description: 'Event ID for which the certificate is issued',
    example: 7,
  })
  @IsInt()
  eventId!: number;

  @ApiProperty({
    description: 'Public or protected URL to the certificate PDF',
    example: 'https://cdn.site.com/certificates/cert_25_7.pdf',
  })
  @IsUrl()
  @MaxLength(500)
  pdfLink!: string;

  @ApiProperty({
    description: 'QR code value for verification (hash or URL)',
    example: 'CERT-2025-7-25-a9f4c2',
  })
  @IsString()
  @MaxLength(255)
  qrCode!: string;
}
