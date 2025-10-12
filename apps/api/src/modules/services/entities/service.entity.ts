export class Service {
  ServiceID: number;
  Name: string;
  AvgServiceTime: number;
  
  // relazioni opzionali per quando vengono incluse
  counterServices?: {
    counter: {
      CounterID: number;
      CounterNumber: number;
    };
  }[];
  
  tickets?: {
    TicketID: number;
    StartTime: Date;
    EndTime?: Date;
    Date: Date;
  }[];
}
