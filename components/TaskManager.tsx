"use client";
import { useTasks } from "@/hooks/useTasks";
import { useToast } from "@/hooks/useToast";
import { TaskForm } from "./TaskForm";
import { TaskStats } from "./TaskStats";
import { TaskFilter } from "./TaskFilter";
import { TaskList } from "./TaskList";
import { ThemeToggle } from "./ThemeToggle";
import { ToastContainer } from "./ToastContainer";

export function TaskManager() {
  const {
    tasks,
    stats,
    filter,
    setFilter,
    hasLoaded,
    addTask,
    removeTask,
    restoreTask,
    toggleTask,
    editTask,
  } = useTasks();

  const toast = useToast();

  function handleAdd(text: string) {
    const created = addTask(text);
    if (created) toast.show({ message: "Tarefa adicionada", variant: "success" });
  }

  function handleRemove(id: string) {
    const removed = removeTask(id);
    if (!removed) return;
    toast.show({
      message: `"${removed.text}" removida`,
      variant: "info",
      actionLabel: "Desfazer",
      onAction: () => restoreTask(removed),
    });
  }

  function handleEdit(id: string, text: string) {
    editTask(id, text);
    toast.show({ message: "Tarefa atualizada", variant: "success" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Minhas Tarefas</h1>
            <p className="text-xs text-slate-400 dark:text-slate-500">Organize seu dia com simplicidade</p>
          </div>
          <ThemeToggle />
        </div>

        {!hasLoaded ? (
          <TaskManagerSkeleton />
        ) : (
          <>
            <div className="mb-5">
              <TaskStats total={stats.total} pending={stats.pending} completed={stats.completed} />
            </div>
            <div className="mb-4">
              <TaskForm onAdd={handleAdd} />
            </div>
            <div className="mb-4">
              <TaskFilter current={filter} onChange={setFilter} />
            </div>
            <TaskList tasks={tasks} filter={filter} onToggle={toggleTask} onRemove={handleRemove} onEdit={handleEdit} />
          </>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

function TaskManagerSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-16 rounded-xl bg-slate-100 dark:bg-slate-800/50" />
      <div className="h-10 rounded-lg bg-slate-100 dark:bg-slate-800/50" />
      <div className="h-9 rounded-lg bg-slate-100 dark:bg-slate-800/50" />
      <div className="space-y-2">
        <div className="h-12 rounded-lg bg-slate-100 dark:bg-slate-800/50" />
        <div className="h-12 rounded-lg bg-slate-100 dark:bg-slate-800/50" />
      </div>
    </div>
  );
}