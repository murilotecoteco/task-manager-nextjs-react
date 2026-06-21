"use client";

import { useState } from "react";

type TaskFormProps = { onAdd: (text: string) => void };

export function TaskForm({ onAdd }: TaskFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onAdd(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="O que você precisa fazer?"
        spellCheck={false}
        className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-700 active:scale-95 disabled:opacity-50 disabled:active:scale-100"
      >
        Adicionar
      </button>
    </form>
  );
}