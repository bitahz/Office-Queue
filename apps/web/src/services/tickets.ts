import type { Service, Ticket } from "@/types/ticket";

const MOCK_SERVICES: Service[] = [
  {
    id: 1,
    name: "Spedizioni/Ricezioni Pacchi",
    averageServiceTime: "15 min",
    icon: "📦",
  },
  {
    id: 2,
    name: "Assicurazioni",
    averageServiceTime: "10 min",
    icon: "🛡️",
  },
  {
    id: 3,
    name: "Bollettini",
    averageServiceTime: "20 min",
    icon: "🧾",
  },
  {
    id: 4,
    name: "Versamenti, prelievi e pagamenti",
    averageServiceTime: "25 min",
    icon: "🏦",
  },
];

export async function fetchServices(): Promise<Service[]> {
  // TODO: Sostituire con fetch al backend
  // const response = await fetch('/api/services');
  // return response.json();
  
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_SERVICES;
}

export async function createTicket(service: Service): Promise<Ticket> {
  // TODO: Sostituire con fetch al backend
  // const response = await fetch('/api/tickets', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ serviceId: service.id })
  // });
  // return response.json();

  await new Promise((resolve) => setTimeout(resolve, 300));
  
  return {
    number: `${service.id}${Math.floor(Math.random() * 100)
      .toString()
      .padStart(3, "0")}`,
    service: service.name,
    estimatedWait: service.estimatedTime,
    date: new Date().toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}
