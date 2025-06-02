import { create } from "zustand";
import { Task } from "../models/task";

interface TaskState {
  todoTasks: Task[];
  inProgressTasks: Task[];
  onApprovalTasks: Task[];
  doneTasks: Task[];
  // your setters or state updaters
  setTodoTasks: (tasks: Task[]) => void;
  setInProgressTasks: (tasks: Task[]) => void;
  setOnApprovalTasks: (tasks: Task[]) => void;
  setDoneTasks: (tasks: Task[]) => void;

  

  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (taskToDelete: Task) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  todoTasks: [],
  inProgressTasks: [],
  onApprovalTasks: [],
  doneTasks: [],

  setTodoTasks: (tasks: any) => set({ todoTasks: tasks }),
  setInProgressTasks: (tasks: any) => set({ inProgressTasks: tasks }),
  setOnApprovalTasks: (tasks: any) => set({ onApprovalTasks: tasks }),
  setDoneTasks: (task: any) => set({ doneTasks: task }),

  addTask: (task) =>
    set((state) => {
      switch (task.status) {
        case "Todo":
          return { todoTasks: [...state.todoTasks, task] };
        case "In Progress":
          return { inProgressTasks: [...state.inProgressTasks, task] };
        case "On Approval":
          return { onApprovalTasks: [...state.onApprovalTasks, task] };
        case "Done":
          return { doneTasks: [...state.doneTasks, task] };
        default:
          return {};
      }
    }),

  updateTask: (task) =>
    set((state) => {
      // First remove the task from all lists
      const filterOut = (tasks: Task[]) => tasks.filter((t) => t.id !== task.id);

      const todoTasks = filterOut(state.todoTasks);
      const inProgressTasks = filterOut(state.inProgressTasks);
      const onApprovalTasks = filterOut(state.onApprovalTasks);
      const doneTasks = filterOut(state.doneTasks);

      // Add updated task to correct list
      switch (task.status) {
        case "Todo":
          return { todoTasks: [...todoTasks, task], inProgressTasks, onApprovalTasks, doneTasks };
        case "In Progress":
          return { todoTasks, inProgressTasks: [...inProgressTasks, task], onApprovalTasks, doneTasks };
        case "On Approval":
          return { todoTasks, inProgressTasks, onApprovalTasks: [...onApprovalTasks, task], doneTasks };
        case "Done":
          return { todoTasks, inProgressTasks, onApprovalTasks, doneTasks: [...doneTasks, task] };
        default:
          return { todoTasks, inProgressTasks, onApprovalTasks, doneTasks };
      }
    }),

  deleteTask: (taskToDelete: any) => {
    set((state: any) => ({
      todoTasks: state.todoTasks.filter((task: any) => task.id !== taskToDelete.id),
      inProgressTasks: state.inProgressTasks.filter(
        (task: any) => task.id !== taskToDelete.id
      ),
      onApprovalTasks: state.onApprovalTasks.filter(
        (task: any) => task.id !== taskToDelete.id
      ),
      doneTasks: state.doneTasks.filter(
        (task: any) => task.id !== taskToDelete.id
      ),
    }));
  },
}));
