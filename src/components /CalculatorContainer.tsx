import { FunctionComponent } from "react";
import Display from "./Display";
import Button from "./Button";

const CalculatorContainer: FunctionComponent = () => {
  return (
    <section className="container">
      <Display />
      <section className="button_container">
        <Button>AC</Button>
        <Button>+\-</Button>
        <Button>%</Button>
        <Button>÷</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>–</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button>=</Button>
      </section>
    </section>
  );
};

export default CalculatorContainer;
