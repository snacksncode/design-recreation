import { PlayCircle } from "@/components/svg/PlayCircle";
import styles from "./experience.module.scss";
import { Container } from "@/components/Container";
import man from "@/public/happy-boy.jpg";
import smile from "@/public/ris-failed-me.jpeg";
import vr from "@/public/he-do-be-gaming.jpg";
import Image, { StaticImageData } from "next/image";
import { Cube } from "@/components/svg/Cube";

type ExperienceCard = {
  caption: string;
  text: string;
  image: StaticImageData;
};

const cards: ExperienceCard[] = [
  { caption: "Arrive inspired", text: "Business Class", image: man },
  { caption: "Expect the exceptional", text: "Economy Class", image: smile },
  { caption: "Award winning technology", text: "Explore the Fleet in AR", image: vr },
];

export const Experience = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          The
          <br /> Zabdos
          <br /> Experience
        </h2>
        <p className={styles.subtitle}>
          Whether it&apos;s your first flight or
          <br /> simply your latest, we work to
          <br /> anticipate your every need
        </p>
        <div className={styles.action}>
          <div className={styles.icon}>
            <PlayCircle />
          </div>
          <span className={styles.text}>Watch the full video now!</span>
        </div>
      </div>
      <div className={styles.cards}>
        {cards.map(({ caption, text, image }, index) => {
          const key = `${caption}_${text}`;
          return (
            <div key={key} className={styles.card}>
              <div className={styles["image-container"]}>
                {index === cards.length - 1 && (
                  <div className={styles["image-text"]}>
                    <Cube />
                    Explore the Zabdos A380 or Boeing 777 using our 3D experience.
                  </div>
                )}
                <Image className={styles.image} placeholder="blur" src={image} sizes="100vw" alt="" />
              </div>
              <div className={styles.content}>
                <p className={styles.caption}>{caption}</p>
                <h3 className={styles.text}>{text}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
