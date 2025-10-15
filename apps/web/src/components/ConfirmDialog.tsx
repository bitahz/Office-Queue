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
          <DialogTitle>Confirm Selection</DialogTitle>
          <DialogDescription className="space-y-2 pt-4">
            <div>
              You have selected: <strong>{service.description}</strong>
            </div>
            <div className="pt-2">
              Average Waiting Time:{" "}
              <strong>{service.avgServiceTime + " min"}</strong>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Annulla
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
