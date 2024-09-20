import { ReactNode } from 'react';

export interface DropdownProps {
    dropdownItem: DropdownItem;
  }

export interface DropdownItem {
  id: number;
  icon?: ReactNode; 
  name?: string; 
  items?: SubItem[];
}

export interface SubItem {
  icon?: ReactNode; 
  name?: string;
  onClick: () => void;
}
