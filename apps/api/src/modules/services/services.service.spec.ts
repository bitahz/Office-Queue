import { Test, TestingModule } from '@nestjs/testing';
import { ServicesService } from './services.service';
import { PrismaService } from '../../providers/prisma/prisma.service';

const mockPrismaService = {
  sERVICE: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  tICKET: {
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
        ServiceID: 1,
        Name: 'Test Service',
        AvgServiceTime: 10,
      };

      mockPrismaService.sERVICE.create.mockResolvedValue(expectedResult);

      const result = await service.create(createServiceDto);

      expect(prisma.sERVICE.create).toHaveBeenCalledWith({
        data: {
          Name: createServiceDto.name,
          AvgServiceTime: createServiceDto.avgServiceTime,
        },
      });
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of services', async () => {
      const expectedResult = [
        {
          ServiceID: 1,
          Name: 'Test Service 1',
          AvgServiceTime: 10,
        },
      ];

      mockPrismaService.sERVICE.findMany.mockResolvedValue(expectedResult);

      const result = await service.findAll();

      expect(prisma.sERVICE.findMany).toHaveBeenCalledWith({
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
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a service by id', async () => {
      const serviceId = 1;
      const expectedResult = {
        ServiceID: 1,
        Name: 'Test Service',
        AvgServiceTime: 10,
      };

      mockPrismaService.sERVICE.findUnique.mockResolvedValue(expectedResult);

      const result = await service.findOne(serviceId);

      expect(prisma.sERVICE.findUnique).toHaveBeenCalledWith({
        where: { ServiceID: serviceId },
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

      mockPrismaService.sERVICE.findUnique.mockResolvedValue(null);

      await expect(service.findOne(serviceId)).rejects.toThrow(
        'Service with ID 999 not found',
      );
    });
  });
});
