import { IsInt } from 'class-validator';

export class CreateCounterDto {
  @IsInt()
  CounterNumber: number;
}
