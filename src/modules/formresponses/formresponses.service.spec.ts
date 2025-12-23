import { Test, TestingModule } from '@nestjs/testing';
import { FormresponsesService } from './formresponses.service';

describe('FormresponsesService', () => {
  let service: FormresponsesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormresponsesService],
    }).compile();

    service = module.get<FormresponsesService>(FormresponsesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
