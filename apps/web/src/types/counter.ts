import { Service } from "./ticket";

export type Counter = {
  id: number;
  number: number;
  counterServices: {
    service: Service;
  }[];
};
