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
    <div className={styles["wrapper"]}>
      <Image
        src={heroImageData}
        sizes="100vw"
        priority
        fill
        alt="Tropical background image"
        className={styles["image"]}
      />
      <Container className={styles["content-wrapper"]}>
        <div className={styles["caption"]}>
          <span className={styles["caption__text"]}>Fly with us to</span>
        </div>
        <div className={styles["heading-wrapper"]}>
          <h1 className={styles["heading"]}>Bangkok</h1>
          <div className={styles["slides"]}>
            <button className={classNames(styles["slide"], styles["slide--active"])}>
              <div className={styles["slide__number"]}>01</div>
              <div className={styles["slide__indicator"]} />
            </button>
            <button className={styles["slide"]}>
              <div className={styles["slide__number"]}>02</div>
              <div className={styles["slide__indicator"]} />
            </button>
            <button className={styles["slide"]}>
              <div className={styles["slide__number"]}>03</div>
              <div className={styles["slide__indicator"]} />
            </button>
          </div>
        </div>
        <p className={styles["subheading"]}>
          A new door to Paradise
          <br />
          <span className={styles["subheading__space"]}> </span>
          for just <Rupee className={styles["subheading__rupee"]} />
          15000
        </p>
        <div className={styles["info"]}>
          <p>Book now till 25 Oct 2019</p>
          <p>Travel from 25 Oct 2019 to 25 Dec 2019</p>
        </div>
        <button className={styles["action"]}>
          <span className={styles["action__text"]}>Let&apos;s Go</span>
          <div className={styles["action__icon"]}>
            <ArrowRight className={styles["action__icon-svg"]} />
          </div>
        </button>
        <div className={styles["showcase"]}>
          <div className={styles["showcase__icon"]}>
            <Airplane className={styles["showcase__icon-svg"]} />
          </div>
          <div className={styles["showcase__airports"]}>
            <div className={styles["showcase__row"]}>
              <div className={styles["showcase__column"]}>
                <div className={styles["showcase__label"]}>Departure airport</div>
                <div className={styles["showcase__select"]}>
                  Mumbai (BOM) <ArrowDown className={styles["showcase__caret"]} />
                </div>
              </div>
              <div className={styles["showcase__column"]}>
                <div className={styles["showcase__label"]}>Arrival airport</div>
                <div className={styles["showcase__select"]}>
                  Aalborg (AAL) <ArrowDown className={styles["showcase__caret"]} />
                </div>
              </div>
            </div>
          </div>
          <button className={styles["showcase__action"]}>Search</button>
        </div>
      </Container>
    </div>
  );
};
