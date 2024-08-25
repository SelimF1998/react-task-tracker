import { ReactNode } from 'react';

export interface UserProps {
    user: User;
  }

export interface User {
  id: number;
  name: string; 
  email: string;
  profileImg?: string;
}
