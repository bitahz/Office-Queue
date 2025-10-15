import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TicketsService } from './tickets.service';
import { PrismaService } from '../../providers/prisma/prisma.service';

describe('TicketsService', () => {
  let service: TicketsService;
  let prismaMock: {
    service: { findFirst: jest.Mock };
    ticket: { findFirst: jest.Mock; create: jest.Mock };
  };

  beforeEach(async () => {
    prismaMock = {
      service: {
        findFirst: jest.fn(),
      },
      ticket: {
        findFirst: jest.fn(),
        create: jest.fn(),
      },
    };

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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a ticket if service exists and ticketNumber is unique on first try', async () => {
      const createTicketDto = { serviceId: 1 };
      const mockService = { id: 1, name: 'Service1' };
      const mockTicket = {
        id: 10,
        ticketNumber: 'ABC123',
        startTime: new Date(),
        serviceId: 1,
        service: mockService,
      };

      prismaMock.service.findFirst.mockResolvedValue(mockService);
      prismaMock.ticket.findFirst.mockResolvedValueOnce(null); // ticket number is unique
      prismaMock.ticket.create.mockResolvedValue(mockTicket);

      const result = await service.create(createTicketDto);

      expect(prismaMock.service.findFirst).toHaveBeenCalledWith({
        where: { id: createTicketDto.serviceId },
      });

      expect(prismaMock.ticket.findFirst).toHaveBeenCalledWith({
        where: { ticketNumber: expect.any(String) },
      });

      expect(prismaMock.ticket.create).toHaveBeenCalledWith({
        data: {
          ticketNumber: expect.any(String),
          startTime: expect.any(Date),
          serviceId: createTicketDto.serviceId,
        },
        include: {
          service: true,
        },
      });

      expect(result).toEqual(mockTicket);
    });

    it('should retry if generated ticketNumber already exists', async () => {
      const createTicketDto = { serviceId: 1 };
      const mockService = { id: 1, name: 'Service1' };
      const mockTicket = {
        id: 11,
        ticketNumber: 'XYZ789',
        startTime: new Date(),
        serviceId: 1,
        service: mockService,
      };

      prismaMock.service.findFirst.mockResolvedValue(mockService);

      // Simula un ticket duplicato la prima volta, poi un codice unico
      prismaMock.ticket.findFirst
        .mockResolvedValueOnce({ ticketNumber: 'DUP123' }) // duplicato
        .mockResolvedValueOnce(null); // valido

      prismaMock.ticket.create.mockResolvedValue(mockTicket);

      const result = await service.create(createTicketDto);

      expect(prismaMock.ticket.findFirst).toHaveBeenCalledTimes(2);
      expect(result).toEqual(mockTicket);
    });

    it('should throw NotFoundException if service does not exist', async () => {
      const createTicketDto = { serviceId: 99 };

      prismaMock.service.findFirst.mockResolvedValue(null);

      await expect(service.create(createTicketDto)).rejects.toThrow(NotFoundException);

      expect(prismaMock.service.findFirst).toHaveBeenCalledWith({
        where: { id: createTicketDto.serviceId },
      });

      expect(prismaMock.ticket.create).not.toHaveBeenCalled();
    });
  });
});
