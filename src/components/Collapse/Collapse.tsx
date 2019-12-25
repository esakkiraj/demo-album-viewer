import React from "react";

type CollapseProps = {
  defaultOpenKey?: string;
};

const Collapse: React.FC<CollapseProps> = ({ children }) => {
  return (
    <div>
      Collapse: <br />
      {children}
    </div>
  );
};

export default Collapse;
export { CollapseProps };
