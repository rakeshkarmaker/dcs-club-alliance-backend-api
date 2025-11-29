import { Test, TestingModule } from '@nestjs/testing';
import { LoginhistoryService } from './loginhistory.service';

describe('LoginhistoryService', () => {
  let service: LoginhistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginhistoryService],
    }).compile();

    service = module.get<LoginhistoryService>(LoginhistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
