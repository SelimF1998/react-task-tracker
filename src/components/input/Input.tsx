import React from 'react';
import './Input.scss';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  name,
  id,
  disabled = false,
}) => {
  return (
    <div className="custom-input" >
        <input
         className="custom-input__normal-input"
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         name={name}
         id={id}
         disabled={disabled}
         autoComplete="off"
        />
    </div>
    
  );
};

export default Input;