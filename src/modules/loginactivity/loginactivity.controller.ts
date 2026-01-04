import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginactivityService } from './loginactivity.service';
import { CreateLoginactivityDto } from './dto/create-loginactivity.dto';
import { UpdateLoginactivityDto } from './dto/update-loginactivity.dto';
 //3.3.0- Implemented 
@Controller('loginactivity')
export class LoginactivityController {
  constructor(private readonly loginactivityService: LoginactivityService) {}

  @Post()
  create(@Body() createLoginactivityDto: CreateLoginactivityDto) {
    return this.loginactivityService.create(createLoginactivityDto);
  }

  @Get()
  findAll() {
    return this.loginactivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginactivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginactivityDto: UpdateLoginactivityDto) {
    return this.loginactivityService.update(+id, updateLoginactivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginactivityService.remove(+id);
  }
}
