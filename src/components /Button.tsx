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

  const handleCalculation = () => {
    const calculationCopy: string[] = calculation?.split(/([+\–\x\÷])/) || [""];
    let result: number = 0;
    for (let i = 0; i < calculationCopy.length; i++) {
      let current = calculationCopy[i];
      if (i === 0) result += Number(current);
      else if (current === "+") result += Number(calculationCopy[i + 1]);
      else if (current === "–") result -= Number(calculationCopy[i + 1]);
      else if (current === "x") result *= Number(calculationCopy[i + 1]);
      else if (current === "÷") result /= Number(calculationCopy[i + 1]);
    }
    setCalculation(result.toString());
  };

  return (
    <div className="button" onClick={() => handleClick()}>
      <p>{children}</p>
    </div>
  );
};

export default Button;
