import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { InsertTicketDto } from './dto/insert-ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto) {
    let createdTicketId = await this.ticketService.create(createTicketDto.serviceId, createTicketDto);
    await this.ticketService.insert(createTicketDto);
    return createdTicketId;
  }
}
