import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventcategoryService } from './eventcategory.service';
import { CreateEventcategoryDto } from './dto/create-eventcategory.dto';
import { UpdateEventcategoryDto } from './dto/update-eventcategory.dto';

@Controller('eventcategory')
export class EventcategoryController {
  constructor(private readonly eventcategoryService: EventcategoryService) {}

  @Post()
  create(@Body() createEventcategoryDto: CreateEventcategoryDto) {
    return this.eventcategoryService.create(createEventcategoryDto);
  }

  @Get()
  findAll() {
    return this.eventcategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventcategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventcategoryDto: UpdateEventcategoryDto) {
    return this.eventcategoryService.update(+id, updateEventcategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventcategoryService.remove(+id);
  }
}
