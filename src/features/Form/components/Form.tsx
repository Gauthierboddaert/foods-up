import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { IFormRecipeSearch } from "../type/FormType";
import useMutateRecipe from "../../search/hooks/useMutateRecipe";

interface FormProps {
  children: React.ReactNode;
  valueForm?: IFormRecipeSearch;
  setValueForm: (form: IFormRecipeSearch) => void;
}

const Form = ({ children, valueForm, setValueForm }: FormProps) => {
  const methods = useForm<IFormRecipeSearch>({ defaultValues: valueForm });
  const recipes = useMutateRecipe();

  const onSubmit: SubmitHandler<IFormRecipeSearch> = async (data) => {
    await recipes.mutateAsync(data);
    setValueForm(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
