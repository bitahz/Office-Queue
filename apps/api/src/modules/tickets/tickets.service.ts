import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from '../../providers/prisma/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  private async generateRandomTicketNumber(serviceId: number): Promise<string> {
    // Recupera il service per ottenere la prima lettera
    const service = await this.prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service || !service.tag) {
      throw new NotFoundException(`Service with ID ${serviceId} not found`);
    }

    const firstLetter = service.tag.charAt(0).toUpperCase();

    // Trova l'ultimo ticket per questo servizio
    const lastTicket = await this.prisma.ticket.findFirst({
      where: {
        ticketNumber: {
          startsWith: firstLetter,
        },
      },
      orderBy: {
        ticketNumber: 'desc',
      },
    });

    let nextNumber = 1;

    if (lastTicket) {
      // Estrae il numero dal ticketNumber (es. "A123" -> 123)
      const lastNumber = parseInt(lastTicket.ticketNumber.substring(1));
      if (!isNaN(lastNumber)) {
        nextNumber = lastNumber + 1;
      }
    }

    // Formatta il numero con 4 cifre (padding con zeri)
    const paddedNumber = nextNumber.toString().padStart(4, '0');

    return `${firstLetter}${paddedNumber}`;
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

    const ticketNumber = await this.generateRandomTicketNumber(serviceId);

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

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { id: id },
      data: {
        ...updateTicketDto,
      },
    });
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
