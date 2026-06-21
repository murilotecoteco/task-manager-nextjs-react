type TaskStatsProps = { total: number; pending: number; completed: number };

export function TaskStats({ total, pending, completed }: TaskStatsProps) {
  const items = [
    { label: "Total", value: total, color: "text-slate-700 dark:text-slate-200" },
    { label: "Pendentes", value: pending, color: "text-amber-600 dark:text-amber-400" },
    { label: "Concluídas", value: completed, color: "text-emerald-600 dark:text-emerald-400" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <p className={`text-xl font-semibold ${item.color}`}>{item.value}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}