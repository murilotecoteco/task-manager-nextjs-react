import { CheckCircle2, FileText, Rocket } from "lucide-react";
import type { ComponentType } from "react";
import type { TaskFilterType } from "@/types/task";

<<<<<<< HEAD
const COPY: Record<
  TaskFilterType,
  { icon: ComponentType<{ className?: string }>; title: string; subtitle: string }
> = {
  all: { icon: FileText, title: "Nenhuma tarefa ainda", subtitle: "Adicione sua primeira tarefa para começar." },
  pending: { icon: CheckCircle2, title: "Tudo em dia!", subtitle: "Não há tarefas pendentes no momento." },
  completed: { icon: Rocket, title: "Nada concluído ainda", subtitle: "Marque uma tarefa como feita para vê-la aqui." },
=======
const COPY: Record<TaskFilterType, { icon: string; title: string; subtitle: string }> = {
  all: { icon: "📝", title: "Nenhuma tarefa ainda", subtitle: "Adicione sua primeira tarefa para começar." },
  pending: { icon: "✅", title: "Tudo em dia!", subtitle: "Não há tarefas pendentes no momento." },
  completed: { icon: "", title: "Nada concluído ainda", subtitle: "Marque uma tarefa como feita para vê-la aqui." },
>>>>>>> 52665b19ea808361aa11d7b9ce8a60a6b08d438d
};

export function EmptyState({ filter }: { filter: TaskFilterType }) {
  const { icon: Icon, title, subtitle } = COPY[filter];
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-slate-200 px-6 py-10 text-center dark:border-slate-700">
      <Icon className="h-8 w-8 text-slate-400 dark:text-slate-500" />
      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{title}</p>
      <p className="text-xs text-slate-400 dark:text-slate-500">{subtitle}</p>
    </div>
  );
}
