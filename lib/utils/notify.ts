import { toast } from "react-toastify";

export function showNotification(title: string, message?: string) {
  toast.success(`${title}${message ? ` — ${message}` : ""}`);
}

export function showReminder(text: string) {
  toast.info(text);
}
