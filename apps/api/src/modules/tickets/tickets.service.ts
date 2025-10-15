import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { PrismaService } from '../../providers/prisma/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  private async generateRandomTicketNumber(): Promise<string> {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let ticketNumber: string = '';
    let exists = true;

    // Genera finché non trova un codice unico
    while (exists) {
      let code = '';

      // 3 lettere random
      for (let i = 0; i < 3; i++) {
        code += letters.charAt(Math.floor(Math.random() * letters.length));
      }

      // 3 numeri random
      for (let i = 0; i < 3; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }

      ticketNumber = code;

      // Verifica se esiste già
      const existing = await this.prisma.ticket.findFirst({
        where: { ticketNumber: ticketNumber },
      });

      exists = !!existing;
    }

    return ticketNumber;
  }

  async create(createTicketDto: CreateTicketDto) {
    const serviceId = createTicketDto.serviceId;

    const service = await this.prisma.service.findFirst({
      where: {
        id: serviceId,
      },
    });

    if (!service) {
      throw new NotFoundException(`Service with ID ${serviceId} not found`);
    }

    const ticketNumber = await this.generateRandomTicketNumber();

    const ticket = await this.prisma.ticket.create({
      data: {
        ticketNumber: ticketNumber,
        startTime: new Date(),
        serviceId: serviceId,
      },
      include:{
        service: true,
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
