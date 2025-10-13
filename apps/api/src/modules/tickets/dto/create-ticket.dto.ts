import { IsInt } from 'class-validator';

export class CreateTicketDto {
  @IsInt()
  serviceId: number;
}
