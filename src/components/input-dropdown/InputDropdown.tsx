import React, { useState } from 'react';
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { ReactNode } from 'react';
import './InputDropdown.scss';

interface InputDropdownProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    name?: string;
    id?: string;
    disabled?: boolean;
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

const InputDropdown: React.FC<InputDropdownProps> = ({
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  name,
  id,
  disabled = false,
  dropdownItem
}) => {
    const [inputDropdownClicked, setInputDropdownClicked] = useState<boolean>(false);

    const handleInputDropdownClick = () => {
        setInputDropdownClicked(!inputDropdownClicked);
    }
  
  return (
    <div className="custom-dropdown" onClick={handleInputDropdownClick} >
        <div className="custom-dropdown__title" >
            <input
         className="custom-dropdown__input"
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         name={name}
         id={id}
         disabled={disabled}
         autoComplete="off"
        />
        <div className="custom-dropdown__icon" >
            { !inputDropdownClicked ? ( <KeyboardArrowDownOutlinedIcon
            style={{ fontSize: "18px" }}
          /> ) : ( <KeyboardArrowUpOutlinedIcon
            style={{ fontSize: "18px" }}
          /> ) }
        </div> 
        </div>

        {inputDropdownClicked && (
        <div id="dropdown-list" className="custom-dropdown__list">
          {dropdownItem.items?.map((item, index) => (
            <div key={index} className="custom-dropdown__list__element" onClick={item.onClick}>
            <div className="custom-dropdown__list__element__icon">
              {item.icon}
            </div>
            <div className="custom-dropdown__list__element__label">
            {item.name}
            </div>
          </div>
          ) )}
        </div>
      )}
        
    </div>

    
  );
};

export default InputDropdown;