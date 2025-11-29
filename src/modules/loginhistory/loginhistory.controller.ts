import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginhistoryService } from './loginhistory.service';
import { CreateLoginhistoryDto } from './dto/create-loginhistory.dto';
import { UpdateLoginhistoryDto } from './dto/update-loginhistory.dto';

@Controller('loginhistory')
export class LoginhistoryController {
  constructor(private readonly loginhistoryService: LoginhistoryService) {}

  @Post()
  create(@Body() createLoginhistoryDto: CreateLoginhistoryDto) {
    return this.loginhistoryService.create(createLoginhistoryDto);
  }

  @Get()
  findAll() {
    return this.loginhistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginhistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginhistoryDto: UpdateLoginhistoryDto) {
    return this.loginhistoryService.update(+id, updateLoginhistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginhistoryService.remove(+id);
  }
}
