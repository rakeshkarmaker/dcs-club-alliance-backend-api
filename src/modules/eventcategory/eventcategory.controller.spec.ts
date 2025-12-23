import { Test, TestingModule } from '@nestjs/testing';
import { EventcategoryController } from './eventcategory.controller';
import { EventcategoryService } from './eventcategory.service';

describe('EventcategoryController', () => {
  let controller: EventcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventcategoryController],
      providers: [EventcategoryService],
    }).compile();

    controller = module.get<EventcategoryController>(EventcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
