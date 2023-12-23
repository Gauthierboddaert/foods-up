import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { IFormRecipeSearch } from "../type/FormType";

interface FormProps {
  children: React.ReactNode;
  setFormData: (data: IFormRecipeSearch) => void;
  defaultValues?: IFormRecipeSearch;
}

const Form = ({ children, setFormData, defaultValues }: FormProps) => {
  const methods = useForm<IFormRecipeSearch>({ defaultValues: defaultValues });

  const OnSubmit: SubmitHandler<IFormRecipeSearch> = (data) => {
    setFormData(data);
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(OnSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
