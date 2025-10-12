import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './modules/services/services.module';
import { TicketModule } from './module/ticket/ticket.module';

@Module({
  imports: [ServicesModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
