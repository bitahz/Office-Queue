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
try {
    const response = await fetch('http://localhost:3000/api/services');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const services: Service[] = await response.json();
    return services;

  } catch (error) {
    console.error('Failed to fetch services:', error);
    throw error;
  }
  
  //await new Promise((resolve) => setTimeout(resolve, 500));
  //return MOCK_SERVICES;
}

export async function createTicket(service: Service): Promise<Ticket> {
  try {
    const response = await fetch('http://localhost:3000/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ serviceId: service.id }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const ticket: Ticket = await response.json();
    return ticket;

  } catch (error) {
    console.error('Failed to create ticket:', error);
    throw error;
  }

  /*
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
  */
}