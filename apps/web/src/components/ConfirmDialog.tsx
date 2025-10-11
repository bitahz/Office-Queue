import type { Service } from "@/types/ticket";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";

type ConfirmDialogProps = {
  open: boolean;
  service: Service | null;
  onClose: () => void;
  onConfirm: () => void;
};

export function ConfirmDialog({
  open,
  service,
  onClose,
  onConfirm,
}: ConfirmDialogProps) {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Conferma Selezione</DialogTitle>
          <DialogDescription className="space-y-2 pt-4">
            <div>
              Hai selezionato: <strong>{service.name}</strong>
            </div>
            <div className="text-muted-foreground">{service.description}</div>
            <div className="pt-2">
              Tempo medio attesa: <strong>{service.averageServiceTime}</strong>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Annulla
          </Button>
          <Button onClick={onConfirm}>Conferma</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
