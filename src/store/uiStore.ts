import { create } from "zustand";
import { Task } from "../models/task";

type UIState = {
  isAddTaskDialogOpen: boolean;
  editClicked: boolean;
  editingTask: Task;

  openDialog: () => void;
  closeDialog: () => void;
  
  setIsAddTaskDialogOpen: (open: boolean) => void;
  setEditClicked: (value: boolean) => void;
  setEditingTask: (task: Task) => void;
};

const defaultTask: Task = {
  id: 0,
  tag: "",
  priority: "Low",
  status: "Todo",
  taskName: "",
  description: "",
  assignee: {
    id: 0,
    name: "",
    email: "",
    profileImg: "",
  },
  attachements: 0,
  messages: 0,
};

export const useUIStore = create<UIState>((set) => ({
  isAddTaskDialogOpen: false,
  editClicked: false,
  editingTask: defaultTask,

  openDialog: () => set({ isAddTaskDialogOpen: true }),
  closeDialog: () => set({ isAddTaskDialogOpen: false }),
  
  setIsAddTaskDialogOpen: (open) => set({ isAddTaskDialogOpen: open }),
  setEditClicked: (value) => set({ editClicked: value }),
  setEditingTask: (task) => set({ editingTask: task }),
}));