import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HealthInfo } from './health-info.entity';

@Injectable()
export class HealthInfoService {
  constructor(
    @Inject('HEALTHINFO_REPOSITORY')
    private healthInfoRepository: Repository<HealthInfo>,
  ) {}

  async create(healthInfo: HealthInfo): Promise<HealthInfo> {
    return await this.healthInfoRepository.save(healthInfo);
  }

  async findOne(id: number): Promise<HealthInfo> {
    return await this.healthInfoRepository.findOne({ where: { id } });
  }

  async update(id: number, healthInfo: HealthInfo): Promise<HealthInfo> {
    await this.healthInfoRepository.update(id, healthInfo);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.healthInfoRepository.delete(id);
  }
}
