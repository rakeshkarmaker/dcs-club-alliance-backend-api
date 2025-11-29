import { Test, TestingModule } from '@nestjs/testing';
import { LoginhistoryController } from './loginhistory.controller';
import { LoginhistoryService } from './loginhistory.service';

describe('LoginhistoryController', () => {
  let controller: LoginhistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginhistoryController],
      providers: [LoginhistoryService],
    }).compile();

    controller = module.get<LoginhistoryController>(LoginhistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
