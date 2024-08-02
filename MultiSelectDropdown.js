import React, { useState } from 'eact';  
  
const MultiSelectDropdown = ({ options, selectedOptions, onChange }) => {  
  const [isOpen, setIsOpen] = useState(false);  
  
  const handleSelect = (option) => {  
   const newSelectedOptions = [...selectedOptions, option];  
   onChange(newSelectedOptions);  
  };  
  
  const handleDeselect = (option) => {  
   const newSelectedOptions = selectedOptions.filter((o) => o!== option);  
   onChange(newSelectedOptions);  
  };  
  
  return (  
   <div>  
    <button onClick={() => setIsOpen(!isOpen)}>Select Options</button>  
    {isOpen && (  
      <ul>  
       {options.map((option) => (  
        <li key={option}>  
          <input  
           type="checkbox"  
           checked={selectedOptions.includes(option)}  
           onChange={(event) => (event.target.checked? handleSelect(option) : handleDeselect(option))}  
          />  
          <span>{option}</span>  
        </li>  
       ))}  
      </ul>  
    )}  
   </div>  
  );  
};  
  
export default MultiSelectDropdown;
