import type { Counter } from "../types/counter";

export async function fetchCounters(): Promise<Counter[]> {
  try {
    const response = await fetch('http://localhost:3000/api/counters');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const counters: Counter[] = await response.json();
    return counters;
  } catch (error) {
    console.error('Failed to fetch counters:', error);
    throw error;
  }
}

export async function fetchNextTicket(counterId: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/counters/${counterId}/next-ticket`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const ticket = await response.json();
    return ticket;
  } catch (error) {
    console.error('Failed to get next ticket:', error);
    throw error;
  }
}
