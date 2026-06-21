"use client";

import { AnimatePresence } from "framer-motion";
import type { Task, TaskFilterType } from "@/types/task";
import { TaskItem } from "./TaskItem";
import { EmptyState } from "./EmptyState";

type TaskListProps = {
  tasks: Task[];
  filter: TaskFilterType;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export function TaskList({ tasks, filter, onToggle, onRemove, onEdit }: TaskListProps) {
  if (tasks.length === 0) return <EmptyState filter={filter} />;

  return (
    <ul className="flex flex-col gap-2">
      <AnimatePresence mode="popLayout" initial={false}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </AnimatePresence>
    </ul>
  );
}