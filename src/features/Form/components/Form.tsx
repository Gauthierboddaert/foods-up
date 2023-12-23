import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

interface IFormInput {
  name: string;
}

interface FormProps {
  children: React.ReactNode;
}

export default function Form({ children }: FormProps) {
  const methods = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
