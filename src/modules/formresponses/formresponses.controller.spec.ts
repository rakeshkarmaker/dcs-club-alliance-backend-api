import { Test, TestingModule } from '@nestjs/testing';
import { FormresponsesController } from './formresponses.controller';
import { FormresponsesService } from './formresponses.service';

describe('FormresponsesController', () => {
  let controller: FormresponsesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormresponsesController],
      providers: [FormresponsesService],
    }).compile();

    controller = module.get<FormresponsesController>(FormresponsesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
