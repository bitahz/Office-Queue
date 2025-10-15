import { Ticket, TicketWithDate } from "@/types/ticket";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(ticket: Ticket) {
  return {
    ...ticket,
    date: new Date(ticket.startTime).toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  } as TicketWithDate;
}
