import { TokenService } from './token.service';
import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';
import { tokenProviders } from './token.providers';
import { TokenController } from './token.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), UsersModule],
  providers: [...tokenProviders, TokenService],
  controllers: [TokenController],
  exports: [TokenService],
})
export class TokenModule {}
