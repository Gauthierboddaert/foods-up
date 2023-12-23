import { useFormContext } from "react-hook-form";

interface InputProps {
  placeHolder: string;
  className?: string;
  name?: string;
  type?: string;
}

const Input = ({ placeHolder, className, type = "text", name }: InputProps) => {
  const { register } = useFormContext();

  return (
    <input
      className={className}
      type={type}
      placeholder={placeHolder}
      {...(undefined !== name ? register(name) : {})}
    />
  );
};

export default Input;
