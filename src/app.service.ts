import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): object {
    return { message: 'Hello World!' };
  }

  async getTest(): Promise<object> {
    const res = await this.prisma.listings.findMany({});

    return { res };
  }
}
