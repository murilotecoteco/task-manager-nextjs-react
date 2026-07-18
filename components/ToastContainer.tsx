"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useToast } from "@/hooks/useToast";
import type { ToastVariant } from "@/types/toast";

const VARIANT_STYLES: Record<ToastVariant, string> = {
  success: "bg-emerald-600",
  info: "bg-slate-900 dark:bg-slate-700",
  error: "bg-red-600",
};

export function ToastContainer() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center gap-2 px-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`pointer-events-auto flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white shadow-lg ${VARIANT_STYLES[toast.variant ?? "info"]}`}
          >
            <span>{toast.message}</span>

            {toast.actionLabel && toast.onAction && (
              <button
                onClick={() => {
                  toast.onAction?.();
                  dismiss(toast.id);
                }}
                className="font-medium underline-offset-2 transition hover:underline"
              >
                {toast.actionLabel}
              </button>
            )}

            <button
              onClick={() => dismiss(toast.id)}
              aria-label="Fechar notificação"
              className="text-white/60 transition hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}