interface InputProps {
  placeHolder: string;
  className?: string;
  name: string;
  type?: string;
}

const Input = ({ placeHolder, className, type = 'text' }: InputProps) => {
  // const { register } = useFormContext();

  return (
    <input
      className={className}
      type={type}
      placeholder={placeHolder}
    />
  );
};

export default Input;
