import { Hero } from "@/components/Hero";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}
