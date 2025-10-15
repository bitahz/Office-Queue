import { ConfirmDialog } from "@/components/ConfirmDialog";
import { ServiceCard } from "@/components/ServiceCard";
import { TicketDialog } from "@/components/TicketDialog";
import { createTicket, fetchServices } from "@/services/tickets";
import type { Service, ServiceWithIcon, Ticket } from "@/types/ticket";
import { useEffect, useState } from "react";

export default function TicketsPage() {
  const [services, setServices] = useState<ServiceWithIcon[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] =
    useState<ServiceWithIcon | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);
  const [ticketOpen, setTicketOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchServices();
      setServices(data);
      setLoading(false);
    })();
  }, []);

  const handleServiceSelect = (s: ServiceWithIcon) => {
    setSelectedService(s);
    setConfirmOpen(true);
  };

  const handleConfirm = async () => {
    if (!selectedService) return;
    setConfirmOpen(false);
    const ticket = await createTicket(selectedService);
    setCurrentTicket(ticket);
    setTicketOpen(true);
  };

  const handleTicketClose = () => {
    setTicketOpen(false);
    setCurrentTicket(null);
    setSelectedService(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Select a Service
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Please choose a service to get a ticket number
        </p>
      </header>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="text-muted-foreground">Loading</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>
      )}

      <ConfirmDialog
        open={confirmOpen}
        service={selectedService}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirm}
      />

      <TicketDialog
        open={ticketOpen}
        ticket={currentTicket}
        onClose={handleTicketClose}
      />
    </div>
  );
}
