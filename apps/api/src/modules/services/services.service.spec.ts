import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../providers/prisma/prisma.service';
import { ServicesService } from './services.service';

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
        tag: 'test',
        description: 'Test Service',
        avgServiceTime: 10,
      };

      const expectedResult = {
        id: 1,
        tag: 'test',
        description: 'Test Service',
        avgServiceTime: 10,
      };

      mockPrismaService.service.create.mockResolvedValue(expectedResult);

      const result = await service.create(createServiceDto);

      expect(prisma.service.create).toHaveBeenCalledWith({
        data: {
          tag: createServiceDto.tag,
          description: createServiceDto.description,
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
          tag: 'test1',
          description: 'Test Service 1',
          avgServiceTime: 10,
        },
      ];

      mockPrismaService.service.findMany.mockResolvedValue(expectedResult);

      const result = await service.findAll();

      expect(prisma.service.findMany).toHaveBeenCalledWith({
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
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a service by id', async () => {
      const serviceId = 1;
      const expectedResult = {
        id: 1,
        tag: 'test',
        description: 'Test Service',
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
});
