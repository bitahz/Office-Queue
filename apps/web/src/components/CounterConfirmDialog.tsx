import type { Counter } from "@/types/counter";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

type CounterConfirmDialogProps = {
  open: boolean;
  counter: Counter | null;
  onClose: () => void;
  onConfirm: () => void;
};

export function CounterConfirmDialog({
  open,
  counter,
  onClose,
  onConfirm,
}: CounterConfirmDialogProps) {
  if (!counter) return null;

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Counter Selection</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to start serving customers at{" "}
            <strong>Counter {counter.number}</strong>
            <br />
            <br />
            Service:{" "}
            <strong>
              {counter.counterServices
                .map((cs) => cs.service.description)
                .join(", ")}
            </strong>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
