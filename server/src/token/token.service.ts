import { UsersService } from './../users/users.service';
import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  forwardRef,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDto } from 'src/dto/result.dto';
import * as bcrypt from 'bcrypt';
import { Token } from './token.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private usersService: UsersService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(hash: string, username: string) {
    let objToken = await this.tokenRepository.findOne({ where: { username } });
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash: hash,
      });
    } else {
      this.tokenRepository.insert({
        hash: hash,
        username: username,
      });
    }
  }

  async delete(username: string) {
    let objToken = await this.tokenRepository.findOne({ where: { username } });
    if (objToken) {
      const deleteResult = await this.tokenRepository.delete(objToken.id);
      if (deleteResult.affected > 0) {
        return true;
      } else {
        return false; // Token not found or not deleted
      }
    } else {
      return false; // Token not found
    }
  }

  async refreshToken(oldToken: string) {
    let objToken = await this.tokenRepository.findOne({
      where: { hash: oldToken },
    });
    if (objToken) {
      let user = await this.usersService.findByUsername(objToken.username);
      return this.authService.login(user);
    } else {
      return new HttpException(
        {
          errorMessage: 'Invalid Token',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
