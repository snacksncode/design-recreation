import { Logo } from "@/components/svg/Logo";
import styles from "./navbar.module.scss";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <button className={styles.hamburger}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </button>
    </nav>
  );
};
