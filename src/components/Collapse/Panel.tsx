import React from "react";

type PanelProps = {
  header: string;
};

const Panel: React.FC<PanelProps> = ({ header, children }) => {
  return (
    <div>
      <span>{header}</span>
      <span>{children}</span>
    </div>
  );
};

export default Panel;
export { PanelProps };
