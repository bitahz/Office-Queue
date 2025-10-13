import { Injectable } from '@nestjs/common';
import { CreateCounterDto } from './dto/create-counter.dto';
import { UpdateCounterDto } from './dto/update-counter.dto';
import { PrismaService } from '../../providers/prisma/prisma.service';

@Injectable()
export class CountersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCounterDto: CreateCounterDto) {
    console.log(createCounterDto);

    return this.prisma.cOUNTER.create({
      data: {
        CounterNumber: createCounterDto.CounterNumber,
      },
    });
  }

  findAll() {
    return this.prisma.cOUNTER.findMany({
      orderBy: { CounterNumber: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.cOUNTER.findUnique({
      where: { CounterID: id },
    });
  }

  update(id: number, updateCounterDto: UpdateCounterDto) {
    return this.prisma.cOUNTER.update({
      where: { CounterID: id },
      data: {
        CounterNumber: updateCounterDto.CounterNumber,
      },
    });
  }

  remove(id: number) {
    return this.prisma.cOUNTER.delete({
      where: { CounterID: id },
    });
  }

  async nextTicket(id: number) {
    const counterServices = await this.prisma.cOUNTER_SERVICE.findMany({
      where: { CounterID: id },
      select: { ServiceID: true },
    });

    const counterServicesIds = counterServices.map(
      (counterService) => counterService.ServiceID,
    );

    const nextTicket = await this.prisma.tICKET.findFirst({
      where: {
        ServiceID: { in: counterServicesIds },
        status: 'WAITING',
      },
      orderBy: { StartTime: 'asc' },
    });

    return nextTicket;
  }

  assignService(counterId: number, serviceId: number) {
    return this.prisma.cOUNTER_SERVICE.create({
      data: {
        CounterID: counterId,
        ServiceID: serviceId,
      },
    });
  }
}
