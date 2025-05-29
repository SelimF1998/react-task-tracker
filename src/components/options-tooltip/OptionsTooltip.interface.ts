import { ReactNode } from 'react';

export interface OptionsTooltipProps {
    tooltipItem: OptionsTooltipItem;
 }

export interface OptionsTooltipItem {
  items?: SubItem[];
}

export interface SubItem {
  icon?: ReactNode; 
  name?: string;
  onClick?: () => void;
}