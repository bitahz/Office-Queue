import { Test, TestingModule } from '@nestjs/testing';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { PrismaService } from '../../providers/prisma/prisma.service';
import { TicketsModule } from './tickets.module';

describe('TicketsModule', () => {
  let controller: TicketsController;
  let service: TicketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketsController],
      providers: [
        TicketsService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TicketsController>(TicketsController);
    service = module.get<TicketsService>(TicketsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should call create on service when controller.create is called', () => {
    const createTicketDto = { serviceId: 1 };
    const spy = jest
      .spyOn(service, 'create')
      .mockReturnValue('ticket-created' as any);

    expect(controller.create(createTicketDto)).toBe('ticket-created');
    expect(spy).toHaveBeenCalledWith(createTicketDto);
  });
});


describe('TicketsModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [TicketsModule],
    })
      .overrideProvider(PrismaService)
      .useValue({}) 
      .compile();
  });

  it('should compile the module and resolve controller and service', () => {
    const controller = module.get<TicketsController>(TicketsController);
    const service = module.get<TicketsService>(TicketsService);

    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});