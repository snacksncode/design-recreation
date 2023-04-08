import Image from "next/image";
import styles from "./page.module.css";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Let&apos;s start</h1>
      <Logo />
    </main>
  );
}
