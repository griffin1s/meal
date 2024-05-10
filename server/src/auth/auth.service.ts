import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (user && user.password) {
      if (bcrypt.compareSync(pass, user.password)) {
        const { password, ...result } = user;
        return result;
      }
    }
    throw new UnauthorizedException();
  }

  // async verifyEmail(token: string): Promise<boolean> {
  //   var emailVerify = await this.emailVerificationModel.f(username);

  //   if (user && user.password) {
  //     if (bcrypt.compareSync(pass, user.password)) {
  //       const { password, ...result } = user;
  //       return result;
  //     }
  //   }
  //   throw new UnauthorizedException();
  // }

  async login(body: any) {
    const user = await this.validateUser(body.username, body.password);
    const payload = {
      username: user.username,
      sub: user.id,
      roles: user.roles,
    };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, user.username);
    return {
      response: {
        token,
        user: { id: user.id, username: user.username, roles: user.roles },
      },
    };
  }

  async logout(username: string) {
    this.tokenService.delete(username);
  }
}
