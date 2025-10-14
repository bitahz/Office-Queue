import { Module } from '@nestjs/common';
import { CountersService } from './counters.service';
import { CountersController } from './counters.controller';
import { PrismaService } from '../../providers/prisma/prisma.service';

@Module({
  controllers: [CountersController],
  providers: [CountersService, PrismaService],
})
export class CountersModule {}
