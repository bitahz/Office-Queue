import { Test, TestingModule } from '@nestjs/testing';
import { CountersService } from './counters.service';
import { PrismaService } from '../../providers/prisma/prisma.service';

describe('CountersService', () => {
  let service: CountersService;
  let prisma: PrismaService;

  const mockPrisma = {
    counter: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    counterService: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
    ticket: {
      findFirst: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountersService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<CountersService>(CountersService);
    prisma = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a counter', async () => {
      const dto = { number: 5 };
      mockPrisma.counter.create.mockResolvedValue(dto);

      const result = await service.create(dto);

      expect(mockPrisma.counter.create).toHaveBeenCalledWith({
        data: { number: dto.number },
      });
      expect(result).toEqual(dto);
    });
  });

  describe('findAll', () => {
    it('should return all counters ordered by counter number asc', async () => {
      const counters = [{ id: 1, number: 1 }, { id: 2, number: 2 }];
      mockPrisma.counter.findMany.mockResolvedValue(counters);

      const result = await service.findAll();

      expect(mockPrisma.counter.findMany).toHaveBeenCalledWith({
        orderBy: { number: 'asc' },
      });
      expect(result).toEqual(counters);
    });
  });

  describe('findOne', () => {
    it('should find one counter by counter number', async () => {
      const counter = { id: 1, number: 10 };
      mockPrisma.counter.findUnique.mockResolvedValue(counter);

      const result = await service.findOne(1);

      expect(mockPrisma.counter.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(counter);
    });
  });

  describe('update', () => {
    it('should update a counter', async () => {
      const updateDto = { number: 20 };
      const updatedCounter = { id: 1, number: 20 };
      mockPrisma.counter.update.mockResolvedValue(updatedCounter);

      const result = await service.update(1, updateDto);

      expect(mockPrisma.counter.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { number: 20 },
      });
      expect(result).toEqual(updatedCounter);
    });
  });

  describe('remove', () => {
    it('should remove a counter by counter number', async () => {
      const removedCounter = { id: 1, number: 10 };
      mockPrisma.counter.delete.mockResolvedValue(removedCounter);

      const result = await service.remove(1);

      expect(mockPrisma.counter.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(removedCounter);
    });
  });

  describe('nextTicket', () => {
  it('should return the next waiting ticket for the given counter', async () => {
    const counterId = 1;
    const counterServicesMock = [
      { serviceId: 101 },
      { serviceId: 102 },
    ];
    const nextTicketMock = {
      id: 555,
      serviceId: 101,
      status: 'WAITING',
      startTime: new Date(),
    };

    mockPrisma.counterService.findMany.mockResolvedValue(counterServicesMock);

    mockPrisma.ticket.findFirst.mockResolvedValue(nextTicketMock);

    const result = await service.nextTicket(counterId);

    expect(mockPrisma.counterService.findMany).toHaveBeenCalledWith({
      where: { counterId: counterId },
      select: { serviceId: true },
    });

    expect(mockPrisma.ticket.findFirst).toHaveBeenCalledWith({
      where: {
        serviceId: { in: [101, 102] },
        status: 'WAITING',
      },
      orderBy: { startTime: 'asc' },
    });

    expect(result).toEqual(nextTicketMock);
  });

  it('should return undefined if no ticket is found', async () => {
    const counterId = 1;
    const counterServicesMock = [{ serviceId: 101 }];

    mockPrisma.counterService.findMany.mockResolvedValue(counterServicesMock);
    mockPrisma.ticket.findFirst.mockResolvedValue(null);

    const result = await service.nextTicket(counterId);

    expect(result).toBeNull();
  });
});

describe('assignService', () => {
  it('should assign a service to a counter', async () => {
    const counterId = 1;
    const serviceId = 101;
    const assignResultMock = {
      id: 1001,
      counterId,
      serviceId,
    };

    mockPrisma.counterService.create.mockResolvedValue(assignResultMock);

    const result = await service.assignService(counterId, serviceId);

    expect(mockPrisma.counterService.create).toHaveBeenCalledWith({
      data: {
        counterId,
        serviceId,
      },
    });

    expect(result).toEqual(assignResultMock);
  });
});

});
