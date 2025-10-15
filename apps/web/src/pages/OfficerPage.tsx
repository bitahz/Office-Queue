import { useState, useEffect } from "react";
import CustomRippleButton from "@/components/customButton";
import { fetchCounters, fetchNextTicket } from "@/services/counters";
import type { Counter } from "@/types/counter";

const OfficerPage = () => {
  const [selectedCounter, setSelectedCounter] = useState<number | ''>('');
  const [loading, setLoading] = useState(false);
  const [counters, setCounters] = useState<Counter[]>([]);
  const [currentTicketId, setCurrentTicketId] = useState<number | null>(null);

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

  const handleCounterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCounter(event.target.value ? Number(event.target.value) : '');
    setCurrentTicketId(null);
  };

  const handleCallNext = async () => {
    if (!selectedCounter) return;

    setLoading(true);
    try {
      const ticket = await fetchNextTicket(selectedCounter);
      setCurrentTicketId(ticket.id);
    } catch (error) {
      // Error is already logged in the service
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Officer Dashboard
        </h1>
      </header>

      <div className="flex flex-col items-center gap-8">
        <div className="w-full max-w-md">
          <label htmlFor="counter-select" className="block text-lg font-medium mb-2">
            Select Counter
          </label>
          <select
            id="counter-select"
            value={selectedCounter}
            onChange={handleCounterChange}
            className="w-full p-3 border rounded-md bg-background text-foreground"
          >
            <option value="">Choose a counter...</option>
            {counters.map((counter) => (
              <option key={counter.id} value={counter.id}>
                Counter {counter.number}
              </option>
            ))}
          </select>
        </div>

        <CustomRippleButton 
          onClick={handleCallNext}
          disabled={!selectedCounter || loading}
        >
          {loading ? 'Calling...' : 'Call Next Customer'}
        </CustomRippleButton>

        {currentTicketId && (
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">Current Ticket: {currentTicketId}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfficerPage;