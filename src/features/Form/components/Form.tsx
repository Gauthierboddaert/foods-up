import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { IFormRecipeSearch } from "../type/FormType";
interface FormSearchProps {
  children: React.ReactNode;
}

const Form = ({ children }: FormSearchProps) => {
  const methods = useForm<IFormRecipeSearch>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<IFormRecipeSearch> = (data: any) =>
    console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={() =>
          methods.handleSubmit(onSubmit) && event?.preventDefault()
        }
      >
        {children}
        <input type="submit"/>
      </form>
    </FormProvider>
  );
};

export default Form;
