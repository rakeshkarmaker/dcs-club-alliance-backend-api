import { Test, TestingModule } from '@nestjs/testing';
import { LoginactivityController } from './loginactivity.controller';
import { LoginactivityService } from './loginactivity.service';

describe('LoginactivityController', () => {
  let controller: LoginactivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginactivityController],
      providers: [LoginactivityService],
    }).compile();

    controller = module.get<LoginactivityController>(LoginactivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
