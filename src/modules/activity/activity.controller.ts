import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  @ApiBody({ type: CreateActivityDto })
  @ApiResponse({ status: 201, description: 'Activity created successfully' })
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }


  @Get('club/:clubId')
  @ApiParam({ name: 'clubId', type: Number, description: 'ID of the club' })
  @ApiResponse({ status: 200, description: 'Single activity details' })
  getActivitiesByClubId(@Param('clubId') clubId: string) {
    return this.activityService.getByClub(+clubId);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of all activities' })
  findAll() {
    return this.activityService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, description: 'ID of the activity' })
  @ApiResponse({ status: 200, description: 'Single activity details' })
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(+id);
  }

  @Patch(':id')
 @ApiParam({ name: 'id', type: Number, description: 'ID of the activity to update' })
  @ApiBody({ type: UpdateActivityDto })
  @ApiResponse({ status: 200, description: 'Activity updated successfully' })
  update(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activityService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, description: 'ID of the activity to delete' })
  @ApiResponse({ status: 200, description: 'Activity deleted successfully' })
  remove(@Param('id') id: string) {
    return this.activityService.remove(+id);
  }
}
