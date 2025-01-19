import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  extraClass?: string;
}

const HeadingText = ({ children, extraClass }: Props) => {
  return <h1 className={`${extraClass} text-xl`}>{children}</h1>;
};

export default HeadingText;
