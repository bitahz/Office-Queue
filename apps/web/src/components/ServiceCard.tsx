import type { ServiceWithIcon } from "@/types/ticket";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type ServiceCardProps = {
  service: ServiceWithIcon;
  onSelect: (service: ServiceWithIcon) => void;
};

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center items-center mb-4">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold">{service.description}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center justify-center gap-2 bg-muted rounded-md px-3 py-2">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-medium">
            {service.avgServiceTime + " min"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full" onClick={() => onSelect(service)}>
          Select
        </Button>
      </CardFooter>
    </Card>
  );
}
