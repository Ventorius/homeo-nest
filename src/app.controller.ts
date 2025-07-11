import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): object {
    return this.appService.getTest();
  }
}
