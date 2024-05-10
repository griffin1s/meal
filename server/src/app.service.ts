// import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(private readonly mailerService: MailerService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // sendMail(): void {
  //   this.mailerService.sendMail({
  //     to: 'whckzvqaonckuicziw@cazlg.com',
  //     from: 'whckzvqaonckuicziw1@cazlg.com',
  //     subject: 'Tasting',
  //     text: 'welcom',
  //     html: '<b>welcom</b>',
  //   });
  // }
}
