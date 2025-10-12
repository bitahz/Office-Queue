import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { InsertTicketDto } from './dto/insert-ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(@Body() serviceName: string, serviceId: string) {
    let createdTicketId = await this.ticketService.create(serviceId, new CreateTicketDto(serviceName.charAt(0).toUpperCase()));
    await this.ticketService.insert(createdTicketId);
    return createdTicketId;
  }
}
