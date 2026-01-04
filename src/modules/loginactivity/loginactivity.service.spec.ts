import { Test, TestingModule } from '@nestjs/testing';
import { LoginactivityService } from './loginactivity.service';

describe('LoginactivityService', () => {
  let service: LoginactivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginactivityService],
    }).compile();

    service = module.get<LoginactivityService>(LoginactivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
