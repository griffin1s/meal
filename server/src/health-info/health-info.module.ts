import { Module } from '@nestjs/common';
import { HealthInfoController } from './health-info.controller';
import { HealthInfoService } from './health-info.service';
import { DatabaseModule } from 'src/db/database.module';
import { healthInfoProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthInfoController],
  providers: [...healthInfoProviders, HealthInfoService],
  exports: [HealthInfoService],
})
export class HealthInfoModule {}
