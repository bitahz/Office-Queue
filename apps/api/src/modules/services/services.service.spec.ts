import { Test, TestingModule } from '@nestjs/testing';
import { ServicesService } from './services.service';
import { PrismaService } from '../../providers/prisma/prisma.service';

const mockPrismaService = {
  service: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  ticket: {
    count: jest.fn(),
  },
};

describe('ServicesService', () => {
  let service: ServicesService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServicesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<ServicesService>(ServicesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a service', async () => {
      const createServiceDto = {
        name: 'Test Service',
        avgServiceTime: 10,
      };

      const expectedResult = {
        id: 1,
        name: 'Test Service',
        avgServiceTime: 10,
      };

      mockPrismaService.service.create.mockResolvedValue(expectedResult);

      const result = await service.create(createServiceDto);

      expect(prisma.service.create).toHaveBeenCalledWith({
        data: {
          name: createServiceDto.name,
          avgServiceTime: createServiceDto.avgServiceTime,
        },
      });
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of services', async () => {
      const expectedResult = [
        {
          id: 1,
          name: 'Test Service 1',
          avgServiceTime: 10,
        },
      ];

      mockPrismaService.service.findMany.mockResolvedValue(expectedResult);

      const result = await service.findAll();

      expect(prisma.service.findMany).toHaveBeenCalledWith({
        orderBy: { name: 'asc' },
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
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a service by id', async () => {
      const serviceId = 1;
      const expectedResult = {
        id: 1,
        name: 'Test Service',
        avgServiceTime: 10,
      };

      mockPrismaService.service.findUnique.mockResolvedValue(expectedResult);

      const result = await service.findOne(serviceId);

      expect(prisma.service.findUnique).toHaveBeenCalledWith({
        where: { id: serviceId },
        include: {
          counterServices: {
            include: {
              counter: true,
            },
          },
          tickets: true,
        },
      });
      expect(result).toEqual(expectedResult);
    });

    it('should throw NotFoundException when service not found', async () => {
      const serviceId = 999;

      mockPrismaService.service.findUnique.mockResolvedValue(null);

      await expect(service.findOne(serviceId)).rejects.toThrow(
        `Service with ID ${serviceId} not found`,
      );
    });
  });



/////////////
  describe('findByName', () => {
  it('should return a service by name', async () => {
    const name = 'Test Service';
    const expectedResult = {
      id: 1,
      name,
      avgServiceTime: 10,
    };

    mockPrismaService.service.findFirst.mockResolvedValue(expectedResult);

    const result = await service.findByName(name);

    expect(prisma.service.findFirst).toHaveBeenCalledWith({
      where: { name },
      include: {
        counterServices: {
          include: {
            counter: true,
          },
        },
      },
    });
    expect(result).toEqual(expectedResult);
  });

  it('should throw NotFoundException when service by name not found', async () => {
    const name = 'NonExistent';

    mockPrismaService.service.findFirst.mockResolvedValue(null);

    await expect(service.findByName(name)).rejects.toThrow(
      `Service with name ${name} not found`,
    );
  });
});

describe('update', () => {
  it('should update a service', async () => {
    const id = 1;
    const updateServiceDto = {
      name: 'Updated Service',
      avgServiceTime: 20,
    };
    const expectedResult = { id, ...updateServiceDto };

    mockPrismaService.service.update.mockResolvedValue(expectedResult);

    const result = await service.update(id, updateServiceDto);

    expect(prisma.service.update).toHaveBeenCalledWith({
      where: { id },
      data: updateServiceDto,
    });
    expect(result).toEqual(expectedResult);
  });

  it('should throw NotFoundException when updating non-existent service', async () => {
    const id = 999;
    const updateServiceDto = {
      name: 'Updated Service',
      avgServiceTime: 20,
    };

    mockPrismaService.service.update.mockRejectedValue(new Error());

    await expect(service.update(id, updateServiceDto)).rejects.toThrow(
      `Service with ID ${id} not found`,
    );
  });
});

describe('remove', () => {
  it('should remove a service', async () => {
    const id = 1;
    const expectedResult = { id };

    mockPrismaService.service.delete.mockResolvedValue(expectedResult);

    const result = await service.remove(id);

    expect(prisma.service.delete).toHaveBeenCalledWith({ where: { id } });
    expect(result).toEqual(expectedResult);
  });

  it('should throw NotFoundException when removing non-existent service', async () => {
    const id = 999;

    mockPrismaService.service.delete.mockRejectedValue(new Error());

    await expect(service.remove(id)).rejects.toThrow(
      `Service with ID ${id} not found`,
    );
  });
});

describe('getServicesForCounter', () => {
  it('should return services for a specific counter', async () => {
    const counterId = 1;
    const expectedResult = [{ id: 1, name: 'Service 1', avgServiceTime: 10 }];

    mockPrismaService.service.findMany.mockResolvedValue(expectedResult);

    const result = await service.getServicesForCounter(counterId);

    expect(prisma.service.findMany).toHaveBeenCalledWith({
      where: {
        counterServices: {
          some: {
            counterId,
          },
        },
      },
    });
    expect(result).toEqual(expectedResult);
  });
});

describe('getQueueLength', () => {
  it('should return queue length for a service', async () => {
    const serviceId = 1;
    const count = 5;

    mockPrismaService.ticket.count.mockResolvedValue(count);

    const result = await service.getQueueLength(serviceId);

    expect(prisma.ticket.count).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          serviceId,
          status: 'WAITING',
          endTime: null,
        }),
      }),
    );
    expect(result).toBe(count);
  });
});

});


