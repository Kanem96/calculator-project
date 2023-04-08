import { FunctionComponent, useState } from "react";
import Display from "./Display";
import Button from "./Button";

const CalculatorContainer: FunctionComponent = () => {
    const [calculation, setCalculation] = useState('')
  return (
    <section className="container">
      <Display calculation={calculation}/>
      <section className="button_container">
        <Button setCalculation={setCalculation}>AC</Button>
        <Button setCalculation={setCalculation}>+\-</Button>
        <Button setCalculation={setCalculation}>%</Button>
        <Button setCalculation={setCalculation}>÷</Button>
        <Button setCalculation={setCalculation}>7</Button>
        <Button setCalculation={setCalculation}>8</Button>
        <Button setCalculation={setCalculation}>9</Button>  
        <Button setCalculation={setCalculation}>x</Button>
        <Button setCalculation={setCalculation}>4</Button>
        <Button setCalculation={setCalculation}>5</Button>
        <Button setCalculation={setCalculation}>6</Button>
        <Button setCalculation={setCalculation}>–</Button>
        <Button setCalculation={setCalculation}>1</Button>
        <Button setCalculation={setCalculation}>2</Button>
        <Button setCalculation={setCalculation}>3</Button>
        <Button setCalculation={setCalculation}>+</Button>
        <Button setCalculation={setCalculation}>.</Button>
        <Button setCalculation={setCalculation}>0</Button>
        <Button setCalculation={setCalculation} calculation={calculation}>=</Button>
      </section>
    </section>
  );
};

export default CalculatorContainer;
