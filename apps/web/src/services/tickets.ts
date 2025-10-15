import { enrichServicesWithIcons } from "@/lib/serviceIcons";
import { formatDate } from "@/lib/utils";
import type { Service, ServiceWithIcon, Ticket } from "@/types/ticket";

export async function fetchServices(): Promise<ServiceWithIcon[]> {
  try {
    const response = await fetch("http://localhost:3000/api/services");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const services: Service[] = await response.json();
    console.log("Fetched services:", services);
    return enrichServicesWithIcons(services);
  } catch (error) {
    console.error("Failed to fetch services:", error);
    throw error;
  }
}

export async function createTicket(service: Service): Promise<Ticket> {
  try {
    const response = await fetch("http://localhost:3000/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ serviceId: service.id }),
    });

    if (!response.ok) {
      console.error("Response not ok:", response);
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }
    const ticket: Ticket = await response.json();
    return formatDate(ticket);
  } catch (error) {
    console.error("Failed to create ticket:", error);
    throw error;
  }
}
