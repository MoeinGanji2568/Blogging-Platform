import { FieldErrors, UseFormRegister } from "react-hook-form";

interface RHFTextFieldProps {
  type?: string;
  label: string;
  name: string;
  dir?: "rtl" | "ltr";
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  //   validationSchema? = object;
}

const RHFTextField: React.FC<RHFTextFieldProps> = ({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  //   validationSchema = {},
  ...rest
}) => {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input  ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name)}
        {...rest}
      />
    </div>
  );
};
export default RHFTextField;
