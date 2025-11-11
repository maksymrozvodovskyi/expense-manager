import { toast } from "react-toastify";

export function showNotification(title: string, message?: string) {
  toast.success(`${title}${message ? ` — ${message}` : ""}`);
}
