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
    let total: number = 0;
    console.log(calculationCopy, "calcCopy");
    for (let i = 0; i < calculationCopy.length; i++) {
      let current = calculationCopy[i];
      console.log(current, "current");
      if (i === 0) total += Number(current);
      else if (current === "+") total += Number(calculationCopy[i + 1]);
      else if (current === "–") total -= Number(calculationCopy[i + 1]);
      else if (current === "x") total *= Number(calculationCopy[i + 1]);
      else if (current === "÷") total /= Number(calculationCopy[i + 1]);
      console.log(total, "total");
    }
    setCalculation(total.toString());
  };

  return (
    <div className="button" onClick={() => handleClick()}>
      <p>{children}</p>
    </div>
  );
};

export default Button;
