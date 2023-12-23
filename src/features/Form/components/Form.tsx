import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function Form() {
  const methods = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <input {...methods.register("firstName")} />
        <input {...methods.register("lastName")} />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
