import { Test, TestingModule } from '@nestjs/testing';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { ServicesModule } from './services.module';
import { PrismaService } from '../../providers/prisma/prisma.service';

describe('ServicesController', () => {
  let controller: ServicesController;
  let service: ServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesController],
      providers: [
        {
          provide: ServicesService,
          useValue: {
            create: jest.fn().mockReturnValue('created'),
            findAll: jest.fn().mockReturnValue(['service1', 'service2']),
            findOne: jest.fn().mockReturnValue('service1'),
            findByName: jest.fn().mockReturnValue('serviceByName'),
            update: jest.fn().mockReturnValue('updated'),
            remove: jest.fn().mockReturnValue('removed'),
            getQueueLength: jest.fn().mockReturnValue(3),
            getServicesForCounter: jest.fn().mockReturnValue(['service1']),
          },
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

  it('should create a service', () => {
    expect(controller.create({ name: 'Test', avgServiceTime: 10 })).toBe('created');
    expect(service.create).toHaveBeenCalledWith({ name: 'Test', avgServiceTime: 10 });
  });

  it('should return all services', () => {
    expect(controller.findAll()).toEqual(['service1', 'service2']);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return one service by ID', () => {
    expect(controller.findOne(1)).toBe('service1');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should return a service by name', () => {
    expect(controller.findByName('Test')).toBe('serviceByName');
    expect(service.findByName).toHaveBeenCalledWith('Test');
  });

  it('should return queue length', () => {
    expect(controller.getQueueLength(1)).toBe(3);
    expect(service.getQueueLength).toHaveBeenCalledWith(1);
  });

  it('should return services for a counter', () => {
    expect(controller.getServicesForCounter(2)).toEqual(['service1']);
    expect(service.getServicesForCounter).toHaveBeenCalledWith(2);
  });

  it('should update a service', () => {
    expect(controller.update(1, { name: 'Updated', avgServiceTime: 15 })).toBe('updated');
    expect(service.update).toHaveBeenCalledWith(1, { name: 'Updated', avgServiceTime: 15 });
  });

  it('should remove a service', () => {
    expect(controller.remove(1)).toBe('removed');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});

describe('ServicesModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [ServicesModule],
    })
      .overrideProvider(PrismaService)
      .useValue({}) 
      .compile();
  });

  it('should compile the module and resolve controller and service', () => {
    const controller = module.get<ServicesController>(ServicesController);
    const service = module.get<ServicesService>(ServicesService);

    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
