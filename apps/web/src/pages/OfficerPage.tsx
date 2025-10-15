import { CounterConfirmDialog } from "@/components/CounterConfirmDialog";
import { CurrentTicketCard } from "@/components/CurrentTicketCard";
import CustomRippleButton from "@/components/customButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchCounters, fetchNextTicket } from "@/services/counters";
import type { Counter } from "@/types/counter";
import { Ticket } from "@/types/ticket";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const OfficerPage = () => {
  const [selectedCounter, setSelectedCounter] = useState<number | "">("");
  const [pendingCounter, setPendingCounter] = useState<Counter | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [counters, setCounters] = useState<Counter[]>([]);
  const [currentTicket, setcurrentTicket] = useState<Ticket | null>(null);
  const [allTicketsServed, setAllTicketsServed] = useState(false);

  useEffect(() => {
    const loadCounters = async () => {
      try {
        const data = await fetchCounters();
        setCounters(data);
      } catch (error) {
        // Error is already logged in the service
      }
    };

    loadCounters();
  }, []);

  const handleCounterChange = (value: string) => {
    const counterId = value ? Number(value) : "";
    if (!counterId) return;

    const counter = counters.find((c) => c.id === counterId);
    setPendingCounter(counter || null);
    setConfirmOpen(true);
  };

  const handleConfirmCounter = async () => {
    if (!pendingCounter) return;

    setConfirmOpen(false);
    setSelectedCounter(pendingCounter.id);
    setLoading(true);

    try {
      const ticket = await fetchNextTicket(pendingCounter.id);
      setcurrentTicket(ticket);
      setAllTicketsServed(ticket === null);
    } catch (error) {
      // Error is already logged in the service
    } finally {
      setLoading(false);
    }
  };

  const handleCancelConfirm = () => {
    setConfirmOpen(false);
    setPendingCounter(null);
  };

  const handleBackToSelection = () => {
    setSelectedCounter("");
    setcurrentTicket(null);
    setAllTicketsServed(false);
    setPendingCounter(null);
  };

  const handleCallNext = async () => {
    if (!selectedCounter) return;

    setLoading(true);
    try {
      const ticket = await fetchNextTicket(selectedCounter);
      setcurrentTicket(ticket);
      if (ticket === null) {
        setAllTicketsServed(true);
      }
    } catch (error) {
      // Error is already logged in the service
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    if (!selectedCounter) return;

    setLoading(true);
    try {
      const ticket = await fetchNextTicket(selectedCounter);
      setcurrentTicket(ticket);
      setAllTicketsServed(ticket === null);
    } catch (error) {
      // Error is already logged in the service
    } finally {
      setLoading(false);
    }
  };

  const selectedCounterData = counters.find((c) => c.id === selectedCounter);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Officer Dashboard
        </h1>
      </header>

      <div className="flex flex-col items-center gap-8">
        {!selectedCounter ? (
          <div className="w-full max-w-md">
            <label
              htmlFor="counter-select"
              className="block text-lg font-medium mb-2"
            >
              Select Counter
            </label>
            <Select
              value={selectedCounter.toString()}
              onValueChange={handleCounterChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a counter..." />
              </SelectTrigger>
              <SelectContent>
                {counters.map((counter) => (
                  <SelectItem key={counter.id} value={counter.id.toString()}>
                    Counter {counter.number} -{" "}
                    {counter.counterServices
                      .map((cs) => cs.service.description)
                      .join(", ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="w-full max-w-2xl space-y-6">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={handleBackToSelection}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Counter Selection
              </Button>
              <div className="text-lg font-semibold">
                Counter {selectedCounterData?.number}
              </div>
            </div>

            {loading ? (
              <Card className="w-full">
                <CardContent className="flex justify-center items-center py-12">
                  <div className="text-muted-foreground">Loading ticket...</div>
                </CardContent>
              </Card>
            ) : (
              <CurrentTicketCard
                ticket={currentTicket}
                allTicketsServed={allTicketsServed}
                onRefresh={handleRefresh}
                isRefreshing={loading}
              />
            )}

            {!allTicketsServed && !loading && (
              <div className="flex justify-center">
                <CustomRippleButton onClick={handleCallNext} disabled={loading}>
                  {loading ? "Calling..." : "Call Next Customer"}
                </CustomRippleButton>
              </div>
            )}
          </div>
        )}
      </div>

      <CounterConfirmDialog
        open={confirmOpen}
        counter={pendingCounter}
        onClose={handleCancelConfirm}
        onConfirm={handleConfirmCounter}
      />
    </div>
  );
};

export default OfficerPage;
