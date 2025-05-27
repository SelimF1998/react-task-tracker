import { ReactNode } from 'react';
import { Task } from '../task-card/TaskCard';

export interface TasksContainerProps {
    label: string;
    color: string;
    tasks?: Task[];
  }

