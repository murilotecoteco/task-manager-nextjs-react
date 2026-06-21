export type ToastVariant = "success" | "info" | "error";

export type Toast = {
  id: string;
  message: string;
  variant?: ToastVariant;
  actionLabel?: string;
  onAction?: () => void;
};