export type Service = {
  id: number;
  tag: string;
  description: string;
  avgServiceTime: string;
};

export type ServiceWithIcon = Service & {
  icon: React.ReactNode;
};

export type Ticket = {
  id: number;
  service: Service;
  endTime: string;
  startTime: string;
  status: string;
  ticketNumber: string;
  date: string;
};

export type TicketWithDate = Ticket & {
  date: string;
};
