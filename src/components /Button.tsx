import { FunctionComponent } from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  setCalculation: React.Dispatch<React.SetStateAction<string>>;
  calculation?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  calculation,
  setCalculation,
}) => {
  const handleClick = () => {
    if (children === "=") handleCalculation();
    else if (children === "AC") setCalculation("");
    else {
      setCalculation((currentCalc) => (currentCalc += children));
    }
  };

  const handleCalculation = () => {};

  return (
    <div className="button" onClick={() => handleClick()}>
      <p>{children}</p>
    </div>
  );
};

export default Button;
