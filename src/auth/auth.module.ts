import { Module } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { toNodeHandler } from 'better-auth/node';
import { AuthController } from './auth.controller';
import { BetterAuthService } from './better-auth.service';

@Module({
  imports: [],
  providers: [BetterAuthService],
  controllers: [AuthController],
  exports: [BetterAuthService],
})
export class AuthModule {
  constructor(
    private readonly adapter: HttpAdapterHost,
    private readonly betterAuthService: BetterAuthService,
  ) {
    this.adapter.httpAdapter.all(
      `${this.betterAuthService.basePath}/{*any}`,
      toNodeHandler(betterAuthService.client),
    );
  }
}
