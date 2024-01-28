import React, { useState } from 'react';

interface DropdownButtonProps {
  options: string[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    console.log('Selected option:', option);
    setIsOpen(false);
    // Führen Sie eine Aktion aus, wenn eine Option angeklickt wird
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleButtonClick}>
        Hover me
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
