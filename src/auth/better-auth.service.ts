import { Injectable } from '@nestjs/common';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BetterAuthService {
  readonly basePath = '/auth/client';
  readonly client: ReturnType<typeof betterAuth>;

  constructor(private readonly prisma: PrismaService) {
    this.client = betterAuth({
      database: prismaAdapter(this.prisma, {
        provider: 'postgresql',
      }),
    });
  }
}
