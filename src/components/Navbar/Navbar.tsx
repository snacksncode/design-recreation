import { Logo } from "@/components/svg/Logo";
import styles from "./navbar.module.scss";
import Link from "next/link";
import avatar from "@/public/avatar.jpg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className={styles["wrapper"]}>
      <Link href="/" className={styles["logo"]}>
        <Logo className={styles["logo__svg"]} />
      </Link>
      <div className={styles["nav"]}>
        <button className={styles["nav__status"]}>Flight Status</button>
        <button className={styles["nav__check-in"]}>Check In</button>
        <button className={styles["nav__avatar"]}>
          <Image src={avatar} alt="Avatar" />
        </button>
        <button className={styles["hamburger"]}>
          <div className={styles["hamburger__line"]} />
          <div className={styles["hamburger__line"]} />
          <div className={styles["hamburger__line"]} />
        </button>
      </div>
    </nav>
  );
};
