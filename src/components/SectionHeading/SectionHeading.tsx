import { ReactNode } from "react";
import styles from "./section-heading.module.scss";
import classNames from "classnames";

type SectionHeadingProps = {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  centerPill?: boolean;
};

export const SectionHeading = ({ title, subtitle, centerPill }: SectionHeadingProps) => {
  return (
    <>
      <h2
        className={classNames(styles["title"], {
          [styles["title--pill-center"]]: centerPill,
        })}
      >
        {title}
      </h2>
      <p className={styles["subtitle"]}>{subtitle}</p>
    </>
  );
};
