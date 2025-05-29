import { ReactNode } from 'react';
import { Task } from '../task-card/TaskCard';

export interface TasksContainerProps {
    label: string;
    color: string;
    tasks?: Task[];
    onEdit?: (task: Task) => void;
    onDelete?: (task: Task) => void;
  }

