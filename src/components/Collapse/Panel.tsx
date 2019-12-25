import React from "react";
import styles from "./styles.module.css";

type PanelProps = {
  header: string;
  renderContent?: () => React.ReactNode;
  displayContent?: boolean;
  onClick?: () => void;
  showCloseButton?: boolean;
};

const Panel: React.FC<PanelProps> = ({
  header,
  children,
  renderContent,
  onClick,
  displayContent = false
}) => {
  return (
    <div className={styles.panelContainer}>
      <div className={styles.panelHeaderWrapper} onClick={onClick}>
        <span className={styles.panelHeaderText}>{header}</span>
        <span>{displayContent ? "Close" : "Open"}</span>
      </div>
      <div className={styles.panelContent}>
        {displayContent && (children || (renderContent && renderContent()))}
      </div>
    </div>
  );
};

export default Panel;
export { PanelProps };
