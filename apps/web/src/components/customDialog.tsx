import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type ConfirmRoleDialogProps = {
  open: boolean;
  roleName: string;
  onClose: () => void;
  onConfirm: () => void;
};

export function ConfirmRoleDialog({
  open,
  roleName,
  onClose,
  onConfirm,
}: ConfirmRoleDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Selection</DialogTitle>
          <DialogDescription className="space-y-2 pt-4">
            Do you confirm you want to enter as <strong>{roleName}</strong>?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}