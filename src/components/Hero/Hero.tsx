import Image from "next/image";
import styles from "./hero.module.scss";
import heroImageData from "@/public/hero-background.jpg";
import { Rupee } from "@/components/svg/Rupee";
import { ArrowRight } from "@/components/svg/ArrowRight";
import { ArrowDown } from "@/components/svg/ArrowDown";
import { Container } from "@/components/Container";
import { Airplane } from "@/components/svg/Airplane";
import classNames from "classnames";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={heroImageData} sizes="100vw" priority fill alt="Tropical background image" className={styles.image} />
      <Container className={styles.content_wrapper}>
        <div className={styles.caption}>
          <span className={styles.text}>Fly with us to</span>
        </div>
        <div className={styles.heading__wrapper}>
          <h1 className={styles.heading}>Bangkok</h1>
          <div className={styles.slides}>
            <div className={classNames(styles.slide, styles.active)}>
              <div className={styles.number}>01</div>
              <div className={styles.indicator}></div>
            </div>
            <div className={styles.slide}>
              <div className={styles.number}>02</div>
              <div className={styles.indicator}></div>
            </div>
            <div className={styles.slide}>
              <div className={styles.number}>03</div>
              <div className={styles.indicator}></div>
            </div>
          </div>
        </div>
        <p className={styles.subheading}>
          A new door to Paradise
          <br />
          <span className={styles.space}> </span>
          for just <Rupee className={styles.rupee} />
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
          <div className={styles.showcase__icon}>
            <Airplane />
          </div>
          <div className={styles.showcase__airports}>
            <div className={styles.showcase__row}>
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
          </div>
          <button className={styles.showcase__action}>Search</button>
        </div>
      </Container>
    </div>
  );
};
