import React, { useState } from "react";
import styles from "./styles.module.css";

type CollapseProps = {
  defaultOpenKey?: string;
};

const Collapse: React.FC<CollapseProps> = ({ children }) => {
  const [currentOpenedPanel, setCurrentOpenedPanel] = useState<
    number | undefined
  >();

  const onPanelClick = (panelIdx: number) => {
    setCurrentOpenedPanel(
      panelIdx !== currentOpenedPanel ? panelIdx : undefined
    );
  };

  return (
    <div className={styles.collpaseContainer}>
      {React.Children.map(children, (ele, idx) =>
        React.cloneElement(ele as React.ReactElement<any>, {
          displayContent: currentOpenedPanel === idx,
          onClick: () => onPanelClick(idx)
        })
      )}
    </div>
  );
};

export default Collapse;
