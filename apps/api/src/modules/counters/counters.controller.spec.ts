import { Test, TestingModule } from '@nestjs/testing';
import { CountersController } from './counters.controller';
import { CountersService } from './counters.service';
import { CreateCounterDto } from './dto/create-counter.dto';
import { UpdateCounterDto } from './dto/update-counter.dto';

const mockCountersService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  nextTicket: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
  assignService: jest.fn(),
};

describe('CountersController', () => {
  let controller: CountersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountersController],
      providers: [
        {
          provide: CountersService,
          useValue: mockCountersService,
        },
      ],
    }).compile();

    controller = module.get<CountersController>(CountersController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create with the correct dto', () => {
      const dto: CreateCounterDto = { number: 1 };
      controller.create(dto);
      expect(mockCountersService.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should call service.findAll', () => {
      controller.findAll();
      expect(mockCountersService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call service.findOne with the correct id', () => {
      controller.findOne('5');
      expect(mockCountersService.findOne).toHaveBeenCalledWith(5);
    });
  });

  describe('getNextTicket', () => {
    it('should call service.nextTicket with the correct id', () => {
      controller.getNextTicket('7');
      expect(mockCountersService.nextTicket).toHaveBeenCalledWith(7);
    });
  });

  describe('update', () => {
    it('should call service.update with correct id and dto', () => {
      const dto: UpdateCounterDto = { number: 2 };
      controller.update('3', dto);
      expect(mockCountersService.update).toHaveBeenCalledWith(3, dto);
    });
  });

  describe('remove', () => {
    it('should call service.remove with correct id', () => {
      controller.remove('10');
      expect(mockCountersService.remove).toHaveBeenCalledWith(10);
    });
  });

  describe('assignService', () => {
    it('should call service.assignService with correct ids', () => {
      controller.assignService('2', '8');
      expect(mockCountersService.assignService).toHaveBeenCalledWith(2, 8);
    });
  });
});
