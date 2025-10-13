import { Module } from '@nestjs/common';
import { ServicesModule } from './modules/services/services.module';
import { TicketsModule } from './modules/tickets/tickets.module';

@Module({
  imports: [ServicesModule, TicketsModule],
})
export class AppModule {}
