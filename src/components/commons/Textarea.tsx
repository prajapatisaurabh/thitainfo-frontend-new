interface TextareaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  rows?: number;
  cols?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  value,
  onChange,
  placeholder,
  className,
  error,
  rows = 4,
  cols = 50,
}) => {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className={`${className} ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-red-500 text-sm font-mono mb-2">{error}</p>}
    </div>
  );
};

export default Textarea;
