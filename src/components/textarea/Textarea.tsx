import React from 'react';
import './Textarea.scss'

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  rows?: number;
}

const Textarea: React.FC<InputProps> = ({
  placeholder = '',
  value = '',
  onChange,
  name,
  id,
  disabled = false,
  rows = 4,
}) => {
  return (
    <div className="custom-textarea" >
        <textarea
        className="custom-textarea__textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
        rows={rows}
    />
    </div>  
  );
};

export default Textarea;