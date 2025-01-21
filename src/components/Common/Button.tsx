import { ReactNode } from "react";

const btnType: Record<string, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

type BtnTypeKeys = keyof typeof btnType;

interface Props {
  children: ReactNode;
  variant: BtnTypeKeys;
  onClick?: () => void;
  className?: string;
}

function Button({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
