import { Link } from "react-router-dom";
import RHFTextField from "../ui/RHFTextField";
import Button from "../Common/Button";
import { SpinnerMini } from "../ui/Spinner";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterFormInputs {
  username: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (values) => {
    console.log(values);
  };
  return (
    <div className="holder bg-secondary-300 rounded-lg p-5 mt-10">
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام و نام خانوادگی"
          name="username"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        <div className="">
          {isLoading ? (
            <div>
              <SpinnerMini />
            </div>
          ) : (
            <Button
              variant="primary"
              className="py-3 px-4 btn btn--primary rounded-xl w-full"
            >
              ثبت نام
            </Button>
          )}
        </div>
      </form>

      <Link to="/auth/sign-in" className="text-secondary-400 mt-6 text-center">
        ورود
      </Link>
    </div>
  );
};

export default RegisterPage;
