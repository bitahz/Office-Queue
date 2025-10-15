import { Test, TestingModule } from '@nestjs/testing';
import { CountersController } from './counters.controller';
import { CountersService } from './counters.service';
import { CountersModule } from './counters.module';
import { PrismaService } from '../../providers/prisma/prisma.service';

describe('CountersController', () => {
  let controller: CountersController;
  let service: CountersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountersController],
      providers: [
        {
          provide: CountersService,
          useValue: {
            create: jest.fn().mockReturnValue('created'),
            findAll: jest.fn().mockReturnValue(['counter1', 'counter2']),
            findOne: jest.fn().mockReturnValue('counter1'),
            nextTicket: jest.fn().mockReturnValue('ticket123'),
            update: jest.fn().mockReturnValue('updated'),
            remove: jest.fn().mockReturnValue('removed'),
            assignService: jest.fn().mockReturnValue('assigned'),
          },
        },
      ],
    }).compile();

    controller = module.get<CountersController>(CountersController);
    service = module.get<CountersService>(CountersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a counter', () => {
    expect(controller.create({ number: 1 })).toBe('created');
    expect(service.create).toHaveBeenCalledWith({ number: 1 });
  });

  it('should return all counters', () => {
    expect(controller.findAll()).toEqual(['counter1', 'counter2']);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return one counter', () => {
    expect(controller.findOne('1')).toBe('counter1');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should get next ticket', () => {
    expect(controller.getNextTicket('1')).toBe('ticket123');
    expect(service.nextTicket).toHaveBeenCalledWith(1);
  });

  it('should update a counter', () => {
    expect(controller.update('1', { number: 2 })).toBe('updated');
    expect(service.update).toHaveBeenCalledWith(1, { number: 2 });
  });

  it('should remove a counter', () => {
    expect(controller.remove('1')).toBe('removed');
    expect(service.remove).toHaveBeenCalledWith(1);
  });

  it('should assign service to counter', () => {
    expect(controller.assignService('1', '2')).toBe('assigned');
    expect(service.assignService).toHaveBeenCalledWith(1, 2);
  });
});


describe('CountersModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [CountersModule],
    })
      .overrideProvider(PrismaService)
      .useValue({}) 
      .compile();
  });

  it('should compile and resolve controller and service', () => {
    const controller = module.get<CountersController>(CountersController);
    const service = module.get<CountersService>(CountersService);

    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});