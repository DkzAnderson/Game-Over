import React, { useState } from 'react';
import { HiArrowsUpDown } from "react-icons/hi2";
import { fetchOrderProps } from '../../services/productService';



interface Option {
  value: fetchOrderProps;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (value: fetchOrderProps) => void;
  placeholder?: string;
}


const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange, placeholder = 'Nombre, creciente' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full h-10">
      <div className="bg-rd h-full flex items-center justify-between border border-rd rounded-lg p-2 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}>
        <h1 className='text-st font-bold text-sm'>
            {selectedOption ? selectedOption.label : placeholder}
        </h1>
        <h1 className='text-xl text-card-bg text-nd'>
            <HiArrowsUpDown />
        </h1>
      </div>
      {isOpen && (
        <ul className="absolute z-10 top-[109%] sm:top-[102%] w-full bg-st border rounded-lg overflow-hidden">
          {options.map((option,i) => (
            <li
              key={i}
              className="px-2 py-2 group hover:bg-interaction cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              <h3 className='group-hover:font-bold duration-300 text-sm text-gray-300'>
                {option.label}
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
