interface LabeledInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export default function LabeledInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: LabeledInputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}:
      </label>
      <input
        type={type}
        id={label}
        className="shadow appearance-none border rounded bg-gray-100 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
      />
    </div>
  );
}
