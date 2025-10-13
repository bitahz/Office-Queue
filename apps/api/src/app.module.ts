import { Module } from '@nestjs/common';
import { ServicesModule } from './modules/services/services.module';
import { TicketModule } from './modules/tickets/ticket.module';

@Module({
  imports: [ServicesModule, TicketModule],
})
export class AppModule {}
