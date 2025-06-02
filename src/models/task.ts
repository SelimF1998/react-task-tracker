export type Tag = 'Frontend' | 'Backend' | 'Bug' | 'Task' | 'UI' | 'Enhancement' | 'Research' | '';

export interface Task {
  id?: number;
  tag?: Tag;
  priority?: 'Low' | 'Medium' | 'High';
  status?: 'Todo' | 'In Progress' | 'On Approval' | 'Done';
  taskName?: string;
  description?: string;
  assignee?: User;
  attachements?: number;
  messages?: number;        
}
export interface User {
  id?: number;
  name?: string;
  email?: string;
  profileImg?: string;
}