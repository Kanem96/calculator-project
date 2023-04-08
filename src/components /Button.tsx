import { FunctionComponent } from "react";

interface ButtonProps {
  children: string;
}

const Button: FunctionComponent<ButtonProps> = ({ children }) => {
  return (
    <div className="button">
      <p>{children}</p>
    </div>
  );
};

export default Button;
