import { FC, PropsWithChildren } from "react";
import styles from "./container.module.scss";
import classNames from "classnames";

type ContainerProps = {
  className?: string;
};

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => {
  const classes = classNames(styles.main, className);
  return <div className={classes}>{children}</div>;
};
