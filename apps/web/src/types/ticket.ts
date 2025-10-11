export type Service = {
  id: number;
  name: string;
  averageServiceTime: string;
  icon: string;
};

export type Ticket = {
  id: number;
  service: string;
  startTime: string;
  endTime: string;
  date: string;
};
