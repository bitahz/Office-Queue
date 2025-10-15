import type { Ticket } from "@/types/ticket";
import { CheckCircle, Ticket as TicketIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type TicketDialogProps = {
  open: boolean;
  ticket: Ticket | null;
  onClose: () => void;
};

export function TicketDialog({ open, ticket, onClose }: TicketDialogProps) {
  if (!ticket) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center items-center space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
          <DialogTitle className="text-2xl">Ticket Generato!</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-lg p-6 gap-3">
            <TicketIcon className="h-10 w-10" />
            <span className="text-5xl font-bold">{ticket.ticketNumber}</span>
          </div>
          <h3 className="text-xl font-semibold">
            {ticket.service.description}
          </h3>
          <div className="w-full space-y-2 bg-muted rounded-lg p-4">
            <div className="flex justify-between">
              <span className="font-medium">Data e ora emissione:</span>
              <span>{ticket.date}</span>
            </div>
          </div>
          <DialogDescription className="text-center">
            Conserva questo numero. Verrai chiamato quando sarà il tuo turno.
          </DialogDescription>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button onClick={onClose} size="lg" className="min-w-[200px]">
            OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
