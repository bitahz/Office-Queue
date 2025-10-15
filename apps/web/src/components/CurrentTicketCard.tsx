import type { Ticket } from "@/types/ticket";
import { CheckCircle2, Ticket as TicketIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type CurrentTicketCardProps = {
  ticket: Ticket | null;
  allTicketsServed?: boolean;
};

export function CurrentTicketCard({
  ticket,
  allTicketsServed,
}: CurrentTicketCardProps) {
  if (allTicketsServed) {
    return (
      <Card className="w-full border-green-500">
        <CardHeader>
          <CardTitle className="text-green-600">All Done!</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 py-8">
          <div className="text-center space-y-4">
            <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto" />
            <p className="text-xl font-semibold text-green-600">
              All customers have been served
            </p>
            <p className="text-sm text-muted-foreground">
              Great job! There are no more tickets in the queue.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!ticket) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Current Ticket</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 py-8">
          <div className="text-center space-y-4">
            <TicketIcon className="h-16 w-16 text-muted-foreground mx-auto" />
            <p className="text-xl text-muted-foreground">
              No customers to serve
            </p>
            <p className="text-sm text-muted-foreground">
              Click "Call Next Customer" to get the next ticket in queue
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Current Ticket</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6 py-6">
        <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-lg p-6 gap-3">
          <TicketIcon className="h-10 w-10" />
          <span className="text-5xl font-bold">{ticket.ticketNumber}</span>
        </div>
        <h3 className="text-xl font-semibold">{ticket.service.description}</h3>
        <div className="w-full space-y-2 bg-muted rounded-lg p-4">
          <div className="flex justify-between">
            <span className="font-medium">Date and hour of issue:</span>
            <span>
              {new Date(ticket.startTime).toLocaleString("it-IT", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          {ticket.status && (
            <div className="flex justify-between">
              <span className="font-medium">Status:</span>
              <span className="capitalize">{ticket.status}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
