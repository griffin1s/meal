import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from '../db/database.module';
import { userProviders } from './users.providers';
import { UserController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { LocalStrategy } from 'src/auth/strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { HealthInfoModule } from 'src/health-info/health-info.module';
import { healthInfoProviders } from 'src/health-info/users.providers';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => AuthModule),
    PassportModule,
    HealthInfoModule,
  ],
  providers: [
    ...userProviders,
    ...healthInfoProviders,
    UsersService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}
