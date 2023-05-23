import { FC, PropsWithChildren } from "react";
import styles from "./container.module.scss";
import classNames from "classnames";

type ContainerProps = {
  className?: string;
  noGutters?: boolean;
};

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, className, noGutters }) => {
  const classes = classNames(styles.main, className, { [styles.gutters]: !noGutters });
  return <div className={classes}>{children}</div>;
};
