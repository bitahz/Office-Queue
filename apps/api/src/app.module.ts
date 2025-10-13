import { Module } from '@nestjs/common';
import { ServicesModule } from './modules/services/services.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { CountersModule } from './modules/counters/counters.module';

@Module({
  imports: [ServicesModule, TicketsModule, CountersModule],
})
export class AppModule {}
