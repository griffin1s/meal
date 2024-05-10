import { DataSource } from 'typeorm';
import { HealthInfo } from './health-info.entity';

export const healthInfoProviders = [
  {
    provide: 'HEALTHINFO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(HealthInfo),
    inject: ['DATA_SOURCE'],
  },
];
