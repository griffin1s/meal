import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HealthInfoModule } from './health-info/health-info.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
@Module({
  imports: [
    AuthModule,
    HealthInfoModule,
    // MailerModule.forRoot({
    //   transport: {
    //     host: 'localhost',
    //     port: 3000,
    //     ignoreTLS: true,
    //     secure: false,
    //     auth: {
    //       user: 'whckzvqaonckuicziw@cazlg.com',
    //       pass: '123456',
    //     },
    //   },
    //   defaults: {
    //     from: '"No Reply" <no-reply@localhost>',
    //   },
    //   preview: true,
    //   template: {
    //     dir: process.cwd() + '/template/',
    //     adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
    //     options: {
    //       strict: true,
    //     },
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
