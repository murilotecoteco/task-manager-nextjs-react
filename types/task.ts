export type Task = {
  id: string;
  text: string;
  done: boolean;
  createdAt: number;
};

export type TaskFilterType = "all" | "pending" | "completed";