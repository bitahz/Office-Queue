import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return await this.prisma.sERVICE.create({
      data: {
        Name: createServiceDto.name,
        AvgServiceTime: createServiceDto.avgServiceTime,
      },
    });
  }

  async findAll() {
    return await this.prisma.sERVICE.findMany({
      orderBy: { Name: 'asc' },
      include: {
        counterServices: {
          include: {
            counter: true,
          },
        },
        _count: {
          select: { tickets: true },
        },
      },
    });
  }

  async findOne(id: number) {
    const service = await this.prisma.sERVICE.findUnique({
      where: { ServiceID: id },
      include: {
        counterServices: {
          include: {
            counter: true,
          },
        },
        tickets: true,
      },
    });

    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    return service;
  }

  async findByName(name: string) {
    const service = await this.prisma.sERVICE.findFirst({
      where: { Name: name },
      include: {
        counterServices: {
          include: {
            counter: true,
          },
        },
      },
    });

    if (!service) {
      throw new NotFoundException(`Service with name ${name} not found`);
    }

    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    try {
      return await this.prisma.sERVICE.update({
        where: { ServiceID: id },
        data: {
          Name: updateServiceDto.name,
          AvgServiceTime: updateServiceDto.avgServiceTime,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.sERVICE.delete({
        where: { ServiceID: id },
      });
    } catch (error) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
  }

  // Metodi specifici per il business logic
  async getServicesForCounter(counterId: number) {
    return await this.prisma.sERVICE.findMany({
      where: {
        counterServices: {
          some: {
            CounterID: counterId,
          },
        },
      },
    });
  }

  async getQueueLength(serviceId: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return await this.prisma.tICKET.count({
      where: {
        ServiceID: serviceId,
        Date: {
          gte: today,
        },
        EndTime: null, // solo ticket non ancora serviti
      },
    });
  }
}
