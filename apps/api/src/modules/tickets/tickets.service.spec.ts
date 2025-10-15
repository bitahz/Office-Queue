import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../providers/prisma/prisma.service';
import { TicketsService } from './tickets.service';

const prismaMock = {
  service: {
    findFirst: jest.fn(),
  },
  ticket: {
    create: jest.fn(),
  },
};

describe('TicketsService', () => {
  let service: TicketsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketsService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<TicketsService>(TicketsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a ticket if service exists', async () => {
      const createTicketDto = { serviceId: 1 };
      const mockService = { id: 1, tag: 'Service1' };
      const mockTicket = { id: 10, startTime: new Date(), serviceId: 1 };

      prismaMock.service.findFirst.mockResolvedValue(mockService);
      prismaMock.ticket.create.mockResolvedValue(mockTicket);

      const result = await service.create(createTicketDto);

      expect(prismaMock.service.findFirst).toHaveBeenCalledWith({
        where: { id: createTicketDto.serviceId },
      });
      expect(prismaMock.ticket.create).toHaveBeenCalledWith({
        data: {
          startTime: expect.any(Date),
          serviceId: createTicketDto.serviceId,
        },
      });
      expect(result).toEqual(mockTicket);
    });

    it('should throw NotFoundException if service does not exist', async () => {
      const createTicketDto = { serviceId: 99 };

      prismaMock.service.findFirst.mockResolvedValue(null);

      await expect(service.create(createTicketDto)).rejects.toThrow(
        NotFoundException,
      );

      expect(prismaMock.service.findFirst).toHaveBeenCalledWith({
        where: { id: createTicketDto.serviceId },
      });
      expect(prismaMock.ticket.create).not.toHaveBeenCalled();
    });
  });
});
