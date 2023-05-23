import { Logo } from "@/components/svg/Logo";
import styles from "./navbar.module.scss";
import Link from "next/link";
import avatar from "@/public/avatar.jpg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.nav}>
        <button className={styles.status}>Flight Status</button>
        <button className={styles.check_in}>Check In</button>
        <button className={styles.avatar}>
          <Image src={avatar} alt="Avatar" />
        </button>
        <button className={styles.hamburger}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </button>
      </div>
    </nav>
  );
};
