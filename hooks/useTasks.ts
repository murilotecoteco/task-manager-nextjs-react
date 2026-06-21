"use client";

import { useEffect, useMemo, useState } from "react";
import type { Task, TaskFilterType } from "@/types/task";

const STORAGE_KEY = "tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskFilterType>("all");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch {
        console.warn("Não foi possível ler as tarefas salvas.");
      }
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, hasLoaded]);

  function addTask(text: string): Task | undefined {
    const trimmed = text.trim();
    if (!trimmed) return undefined;

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: trimmed,
      done: false,
      createdAt: Date.now(),
    };

    setTasks((prev) => [newTask, ...prev]);
    return newTask;
  }

  function removeTask(id: string): Task | undefined {
    const task = tasks.find((t) => t.id === id);
    if (!task) return undefined;
    setTasks((prev) => prev.filter((t) => t.id !== id));
    return task;
  }

  function restoreTask(task: Task) {
    setTasks((prev) => (prev.some((t) => t.id === task.id) ? prev : [task, ...prev]));
  }

  function toggleTask(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function editTask(id: string, text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t)));
  }

  const filteredTasks = useMemo(() => {
    if (filter === "pending") return tasks.filter((t) => !t.done);
    if (filter === "completed") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);

  const stats = useMemo(
    () => ({
      total: tasks.length,
      pending: tasks.filter((t) => !t.done).length,
      completed: tasks.filter((t) => t.done).length,
    }),
    [tasks]
  );

  return {
    tasks: filteredTasks,
    stats,
    filter,
    setFilter,
    hasLoaded,
    addTask,
    removeTask,
    restoreTask,
    toggleTask,
    editTask,
  };
}