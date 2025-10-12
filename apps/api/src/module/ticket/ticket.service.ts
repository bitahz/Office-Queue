import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { InsertTicketDto } from './dto/insert-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}


  async create(serviceId, createTicketDto: CreateTicketDto) {
    let x = await this.prisma.sERVICE.findFirst({
      where: {
        ServiceID: serviceId,
      },
    });
    if (!x) {
      throw new Error('Service not found');
    } else {
    return createTicketDto.id;
    }
  }

  findAll() {
    return `This action returns all ticket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  async insert(id: string) {
    await this.prisma.tICKET.create({
      data: {
        TicketID: id,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
