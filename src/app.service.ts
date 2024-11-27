import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) { }


  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: {
       id: id,
      },
    })
  }
}