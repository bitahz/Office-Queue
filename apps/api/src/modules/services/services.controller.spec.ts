import { Test, TestingModule } from '@nestjs/testing';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

const mockServicesService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  findByTag: jest.fn(),
  getQueueLength: jest.fn(),
  getServicesForCounter: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('ServicesController', () => {
  let controller: ServicesController;
  let service: ServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesController],
      providers: [
        {
          provide: ServicesService,
          useValue: mockServicesService,
        },
      ],
    }).compile();

    controller = module.get<ServicesController>(ServicesController);
    service = module.get<ServicesService>(ServicesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a service', async () => {
      const createServiceDto = {
        tag: 'test',
        description: 'Test Service',
        avgServiceTime: 10,
      };

      const expectedResult = {
        ServiceID: 1,
        Tag: 'test',
        Description: 'Test Service',
        AvgServiceTime: 10,
      };

      mockServicesService.create.mockResolvedValue(expectedResult);

      const result = await controller.create(createServiceDto);

      expect(service.create).toHaveBeenCalledWith(createServiceDto);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of services', async () => {
      const expectedResult = [
        {
          ServiceID: 1,
          Name: 'Test Service',
          AvgServiceTime: 10,
        },
      ];

      mockServicesService.findAll.mockResolvedValue(expectedResult);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalled();
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

      mockServicesService.findOne.mockResolvedValue(expectedResult);

      const result = await controller.findOne(serviceId);

      expect(service.findOne).toHaveBeenCalledWith(serviceId);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findByTag', () => {
    it('should return a service by tag', async () => {
      const serviceTag = 'test';
      const expectedResult = {
        ServiceID: 1,
        Tag: 'test',
        Description: 'Test Service',
        AvgServiceTime: 10,
      };

      mockServicesService.findByTag.mockResolvedValue(expectedResult);

      const result = await controller.findByTag(serviceTag);

      expect(service.findByTag).toHaveBeenCalledWith(serviceTag);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getQueueLength', () => {
    it('should return queue length for a service', async () => {
      const serviceId = 1;
      const expectedResult = 5;

      mockServicesService.getQueueLength.mockResolvedValue(expectedResult);

      const result = await controller.getQueueLength(serviceId);

      expect(service.getQueueLength).toHaveBeenCalledWith(serviceId);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('update', () => {
    it('should update a service', async () => {
      const serviceId = 1;
      const updateServiceDto = {
        name: 'Updated Service',
        avgServiceTime: 15,
      };

      const expectedResult = {
        ServiceID: 1,
        Name: 'Updated Service',
        AvgServiceTime: 15,
      };

      mockServicesService.update.mockResolvedValue(expectedResult);

      const result = await controller.update(serviceId, updateServiceDto);

      expect(service.update).toHaveBeenCalledWith(serviceId, updateServiceDto);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('remove', () => {
    it('should remove a service', async () => {
      const serviceId = 1;
      const expectedResult = {
        ServiceID: 1,
        Name: 'Test Service',
        AvgServiceTime: 10,
      };

      mockServicesService.remove.mockResolvedValue(expectedResult);

      const result = await controller.remove(serviceId);

      expect(service.remove).toHaveBeenCalledWith(serviceId);
      expect(result).toEqual(expectedResult);
    });
  });
});
