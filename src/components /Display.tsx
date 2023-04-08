import { FunctionComponent } from "react";

interface DisplayProps {
  calculation: string;
}

const Display: FunctionComponent<DisplayProps> = ({ calculation }) => {
  return (
    <div className="display">
      <p className="calculation">{calculation}</p>
    </div>
  );
};

export default Display;
