import type { TaskFilterType } from "@/types/task";

type TaskFilterProps = { current: TaskFilterType; onChange: (f: TaskFilterType) => void };

const FILTERS: { key: TaskFilterType; label: string }[] = [
  { key: "all", label: "Todas" },
  { key: "pending", label: "Pendentes" },
  { key: "completed", label: "Concluídas" },
];

export function TaskFilter({ current, onChange }: TaskFilterProps) {
  return (
    <div className="flex gap-1 rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
      {FILTERS.map((f) => {
        const isActive = current === f.key;
        return (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
              isActive
                ? "bg-white text-brand-700 shadow-sm dark:bg-slate-700 dark:text-brand-300"
                : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}