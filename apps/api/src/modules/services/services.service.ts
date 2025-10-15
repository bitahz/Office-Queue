import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../providers/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return await this.prisma.service.create({
      data: {
        tag: createServiceDto.tag,
        description: createServiceDto.description,
        avgServiceTime: createServiceDto.avgServiceTime,
      },
    });
  }

  async findAll() {
    return await this.prisma.service.findMany({
      orderBy: { tag: 'asc' },
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
    const service = await this.prisma.service.findUnique({
      where: { id: id },
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

  async findByTag(tag: string) {
    const service = await this.prisma.service.findFirst({
      where: { tag: tag },
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
      return await this.prisma.service.update({
        where: { id: id },
        data: {
          tag: updateServiceDto.tag,
          avgServiceTime: updateServiceDto.avgServiceTime,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.service.delete({
        where: { id: id },
      });
    } catch (error) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
  }

  // Metodi specifici per il business logic
  async getServicesForCounter(counterId: number) {
    return await this.prisma.service.findMany({
      where: {
        counterServices: {
          some: {
            counterId: counterId,
          },
        },
      },
    });
  }

  async getQueueLength(serviceId: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return await this.prisma.ticket.count({
      where: {
        serviceId: serviceId,
        startTime: {
          gte: today,
        },
        endTime: null, // solo ticket non ancora serviti
        status: 'WAITING',
      },
    });
  }
}
