import { IsInt } from 'class-validator';

export class CreateCounterDto {
  @IsInt()
  number: number;
}
