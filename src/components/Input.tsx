import React from "react";

interface IInputProps {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  onChangeHandler?: (_: string) => unknown;
  validator?: (_: string) => boolean;
  className?: string;
  Error: string;
}
export const Input: React.FC<IInputProps> = ({
  type = "text",
  placeholder,
  defaultValue = "",
  onChangeHandler,
  validator,
  className,
  Error,
}) => {
  const [value, setValue] = React.useState<string>(defaultValue);
  const [error, setError] = React.useState<string>("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (validator && !validator(newValue)) {
      setError(Error);
    } else {
      setError("");
    }

    if (onChangeHandler) onChangeHandler(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`px-3 py-1.5 w-[17vw] rounded-lg border-2 border-slate-300 shadow-md ${className}`}
      />
      {error && <p className="text-red-500 text-[11px]">{error}</p>}
    </div>
  );
};
