import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTicketDto: CreateTicketDto) {
    const serviceId = createTicketDto.serviceId;

    const service = await this.prisma.sERVICE.findFirst({
      where: {
        ServiceID: serviceId,
      },
    });

    if (!service) {
      throw new NotFoundException(`Service with ID ${serviceId} not found`);
    }

    const ticket = await this.prisma.tICKET.create({
      data: {
        StartTime: new Date(),
        Date: new Date(),
        ServiceID: serviceId,
      },
    });

    return ticket;
  }

  findAll() {
    return `This action returns all ticket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
