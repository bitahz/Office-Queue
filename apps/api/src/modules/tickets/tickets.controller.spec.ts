import { Test, TestingModule } from '@nestjs/testing';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

describe('TicketController', () => {
  let controller: TicketsController;
  let service: TicketsService;

  const mockTicketsService = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketsController],
      providers: [{
          provide: TicketsService,
          useValue: mockTicketsService,
        },],
    }).compile();

    controller = module.get<TicketsController>(TicketsController);
    service = module.get<TicketsService>(TicketsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call ticketsService.create with correct DTO and return result', async () => {
      const createTicketDto: CreateTicketDto = { serviceId: 1 };
      const mockResult = { id: 123, serviceId: 1, startTime: new Date() };

      mockTicketsService.create.mockResolvedValue(mockResult);

      const result = await controller.create(createTicketDto);

      expect(mockTicketsService.create).toHaveBeenCalledWith(createTicketDto);
      expect(result).toEqual(mockResult);
    });
  });

});

