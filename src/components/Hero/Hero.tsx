import Image from "next/image";
import styles from "./hero.module.scss";
import heroImageData from "@/public/hero-background.jpg";
import { Rupee } from "@/components/svg/Rupee";
import { ArrowRight } from "@/components/svg/ArrowRight";
import { ArrowDown } from "@/components/svg/ArrowDown";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={heroImageData} sizes="100vw" priority fill alt="Tropical background image" className={styles.image} />
      <div className={styles.caption}>
        <span className={styles.text}>Fly with us to</span>
      </div>
      <h1 className={styles.heading}>Bangkok</h1>
      <p className={styles.subheading}>
        A new door to Paradise
        <br />
        for just <Rupee />
        15000
      </p>
      <div className={styles.info}>
        <p>Book now till 25 Oct 2019</p>
        <p>Travel from 25 Oct 2019 to 25 Dec 2019</p>
      </div>
      <button className={styles.action}>
        <span className={styles.text}>Let&apos;s Go</span>
        <div className={styles.icon}>
          <ArrowRight />
        </div>
      </button>
      <div className={styles.showcase}>
        <div className={styles.column}>
          <div className={styles.label}>Departure airport</div>
          <div className={styles.select}>
            Mumbai (BOM) <ArrowDown />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.label}>Arrival airport</div>
          <div className={styles.select}>
            Aalborg (AAL) <ArrowDown />
          </div>
        </div>
      </div>
      <button className={styles.showcase__action}>Search</button>
    </div>
  );
};
