import { ReactNode } from 'react';
import { Task } from '../../models/task';

export interface TasksContainerProps {
    label: string;
    color: string;
    tasks?: Task[];
    onEdit?: (task: Task) => void;
    onDelete?: (task: Task) => void;
  }

