import { Test, TestingModule } from '@nestjs/testing';
import { EventcategoryService } from './eventcategory.service';

describe('EventcategoryService', () => {
  let service: EventcategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventcategoryService],
    }).compile();

    service = module.get<EventcategoryService>(EventcategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
