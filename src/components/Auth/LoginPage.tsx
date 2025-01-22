import { SubmitHandler, useForm } from "react-hook-form";
import RHFTextField from "../ui/RHFTextField";
import { SpinnerMini } from "../ui/Spinner";
import Button from "../Common/Button";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

interface LoginFormInputs {
  email: string;
  password: string;
}

function LoginPage() {
  const loginUser = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = async (values) => {
    console.log(values);
    try {
      loginUser.mutate(values);
    } catch (error) {}
  };
  //   try {
  //     const res = await signInApi(values);
  //     console.log(res);
  //     toast.success(` ورود شما با موفقیت انجام شد کاربر ${values.username}`);
  //     setTimeout(() => {
  //       window.location.pathname = "/panel";
  //     }, 3000);
  //   } catch (error) {
  //     toast.success("مشکلی پیش آمده");
  //     console.log(error);
  //   }
  // };

  return (
    <div className="holder bg-secondary-300 rounded-lg p-5 mt-10">
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام کاربری"
          name="email"
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
              ورود
            </Button>
          )}
        </div>
      </form>

      <Link to="/auth/sign-up" className="text-secondary-400 mt-6 text-center">
        ایجاد حساب کاربری
      </Link>
    </div>
  );
}

export default LoginPage;
