import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorators/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  // @Public()
  // @Get()
  // sendMail(): void {
  //   return this.appService.sendMail();
  // }
}
