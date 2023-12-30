import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { IFormRecipeSearch } from "../type/FormType";

interface FormProps {
  children: React.ReactNode;
  setValueForm: (form: IFormRecipeSearch) => void;
  categoryName?: string;
}

const Form = ({ children, setValueForm, categoryName="" }: FormProps) => {
  const methods = useForm<IFormRecipeSearch>({ defaultValues: {name: "", categoryName: categoryName} });

  const onSubmit: SubmitHandler<IFormRecipeSearch> = async (data) => {
    setValueForm(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
