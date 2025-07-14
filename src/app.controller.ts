import { getAuth } from '@clerk/fastify';
import { Controller, Get, Req, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';

type ClerkFastifyRequest = Parameters<typeof getAuth>[0];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): object {
    return this.appService.getTest();
  }

  @Get('protected')
  getTest2(@Req() request: ClerkFastifyRequest): object {
    const { userId } = getAuth(request);

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.appService.getTest();
  }
}
