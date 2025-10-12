import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  avgServiceTime: number;
}
