import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCounterDto } from './dto/create-counter.dto';
import { UpdateCounterDto } from './dto/update-counter.dto';
import { PrismaService } from '../../providers/prisma/prisma.service';

@Injectable()
export class CountersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCounterDto: CreateCounterDto) {
    return this.prisma.counter.create({
      data: {
        number: createCounterDto.number,
      },
    });
  }

  findAll() {
    return this.prisma.counter.findMany({
      orderBy: { number: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.counter.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateCounterDto: UpdateCounterDto) {
    return this.prisma.counter.update({
      where: { id: id },
      data: {
        number: updateCounterDto.number,
      },
    });
  }

  remove(id: number) {
    return this.prisma.counter.delete({
      where: { id: id },
    });
  }

  async nextTicket(id: number) {
    const counterServices = await this.prisma.counterService.findMany({
      where: { counterId: id },
      select: { serviceId: true },
    });

    const counterServicesIds = counterServices.map(
      (counterService) => counterService.serviceId,
    );

    if (!counterServicesIds.length) {
      throw new NotFoundException('No services assigned to this counter');
    }

    const nextTicket = await this.prisma.ticket.findFirst({
      where: {
        serviceId: { in: counterServicesIds },
        status: 'WAITING',
      },
      orderBy: { startTime: 'asc' },
    });

    return nextTicket;
  }

  assignService(counterId: number, serviceId: number) {
    return this.prisma.counterService.create({
      data: {
        counterId: counterId,
        serviceId: serviceId,
      },
    });
  }
}
