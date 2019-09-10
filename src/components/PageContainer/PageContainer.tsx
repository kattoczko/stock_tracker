import React from "react";
import styles from "./PageContainer.module.css";

const PageContainer: React.FunctionComponent<{}> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
