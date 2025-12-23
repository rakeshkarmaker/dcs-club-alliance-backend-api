import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormresponsesService } from './formresponses.service';
import { CreateFormresponseDto } from './dto/create-formresponse.dto';
import { UpdateFormresponseDto } from './dto/update-formresponse.dto';

@Controller('formresponses')
export class FormresponsesController {
  constructor(private readonly formresponsesService: FormresponsesService) {}

  @Post()
  create(@Body() createFormresponseDto: CreateFormresponseDto) {
    return this.formresponsesService.create(createFormresponseDto);
  }

  @Get()
  findAll() {
    return this.formresponsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formresponsesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormresponseDto: UpdateFormresponseDto) {
    return this.formresponsesService.update(+id, updateFormresponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formresponsesService.remove(+id);
  }
}
