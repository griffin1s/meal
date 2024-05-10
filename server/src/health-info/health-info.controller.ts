import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HealthInfo } from './health-info.entity';
import { HealthInfoService } from './health-info.service';

@Controller('health-info')
export class HealthInfoController {
  constructor(private readonly healthInfoService: HealthInfoService) {}
  @Post()
  create(@Body() healthInfo: HealthInfo): Promise<HealthInfo> {
    return this.healthInfoService.create(healthInfo);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<HealthInfo> {
    return this.healthInfoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() healthInfo: HealthInfo,
  ): Promise<HealthInfo> {
    return this.healthInfoService.update(id, healthInfo);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.healthInfoService.remove(id);
  }
}
