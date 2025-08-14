import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Column } from "./Dashboard";

interface StatusDropdownProps {
  label: string;
  value: string;
  options: Column[];
  onChange: (value: string) => void;
  required?: boolean;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  label,
  value,
  options,
  onChange,
  required = false,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <label className="capitalize text-secondary-500 font-bold text-sm mb-2 block">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <button
        type="button"
        className={`w-full border border-lines-light px-4 py-2 flex justify-between items-center rounded-lg focus:outline-none focus:border-primary-300 ${
          showOptions ? "border-primary-300" : ""
        }`}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span className="capitalize">{value}</span>
        {showOptions ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      
      {showOptions && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-lines-light rounded-lg shadow-lg">
          <div className="p-2 flex flex-col gap-1">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                className="capitalize text-secondary-500 text-left px-2 py-2 hover:bg-gray-100 rounded"
                onClick={() => handleOptionClick(option.name)}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;