import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ListingsController } from './listings.controller';
import { ListingsRepository } from './listings.repository';
import { ListingsService } from './listings.service';

@Module({
  providers: [ListingsService, ListingsRepository, PrismaService],
  controllers: [ListingsController],
})
export class ListingsModule {}
