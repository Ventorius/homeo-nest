import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ListingsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.listings.findMany({});
  }

  async findById(id: string) {
    return this.prisma.listings.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.listingsCreateInput) {
    return this.prisma.listings.create({
      data,
    });
  }

  async update(id: string, data: Prisma.listingsUpdateInput) {
    return this.prisma.listings.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.listings.delete({
      where: { id },
    });
  }
}
