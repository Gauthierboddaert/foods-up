import { useFormContext } from "react-hook-form";

interface InputProps {
  placeHolder: string;
  className?: string;
  name: string;
  type?: string;
}

const Input = ({ placeHolder, className, name, type = 'text' }: InputProps) => {
  // const { register } = useFormContext();

  console.log(name);

  return (
    <input
      className={className}
      type={type}
      placeholder={placeHolder}
    />
  );
};

export default Input;
