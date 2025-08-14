interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label className="text-secondary-500 font-bold text-sm mb-2 block">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        className="w-full border-lines-light border rounded-lg p-2 text-sm focus:outline-none focus:border-primary-300"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default FormInput;