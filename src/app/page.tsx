import { Hero } from "@/components/Hero";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Experience } from "@/components/Experience";
import { Journey } from "@/components/Journey";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Experience />
        <Journey />
      </main>
    </>
  );
}
