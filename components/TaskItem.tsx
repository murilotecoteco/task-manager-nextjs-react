"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Task } from "@/types/task";

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export function TaskItem({ task, onToggle, onRemove, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  function startEditing() {
    setDraft(task.text);
    setIsEditing(true);
  }

  function commitEdit() {
    const trimmed = draft.trim();
    if (!trimmed) {
      setDraft(task.text);
      setIsEditing(false);
      return;
    }
    if (trimmed !== task.text) onEdit(task.id, trimmed);
    setIsEditing(false);
  }

  function cancelEdit() {
    setDraft(task.text);
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") commitEdit();
    if (e.key === "Escape") cancelEdit();
  }

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-colors ${
        task.done
          ? "border-emerald-100 bg-emerald-50/50 dark:border-emerald-500/10 dark:bg-emerald-500/5"
          : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/50"
      }`}
    >
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        className="h-4 w-4 shrink-0 rounded border-slate-300 text-brand-600 focus:ring-brand-500 dark:border-slate-600"
      />

      {isEditing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={commitEdit}
          className="flex-1 rounded-md border border-brand-300 bg-white px-2 py-1 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-brand-500/40 dark:bg-slate-900 dark:text-slate-100"
        />
      ) : (
        <span
          onDoubleClick={startEditing}
          title="Clique duas vezes para editar"
          className={`flex-1 cursor-text truncate text-sm transition ${
            task.done ? "text-slate-400 line-through dark:text-slate-500" : "text-slate-700 dark:text-slate-200"
          }`}
        >
          {task.text}
        </span>
      )}

      {!isEditing && (
        <button
          onClick={startEditing}
          aria-label={`Editar tarefa: ${task.text}`}
          className="shrink-0 rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-brand-50 hover:text-brand-600 dark:text-slate-600 dark:hover:bg-brand-500/10 dark:hover:text-brand-400"
        >
          Editar
        </button>
      )}

      <button
        onClick={() => onRemove(task.id)}
        aria-label={`Remover tarefa: ${task.text}`}
        className="shrink-0 rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-red-50 hover:text-red-500 dark:text-slate-600 dark:hover:bg-red-500/10 dark:hover:text-red-400"
      >
        Remover
      </button>
    </motion.li>
  );
}