import { Container } from "@/components/Container";
import styles from "./journey.module.scss";
import { ReactNode } from "react";
import { Calendar } from "@/components/svg/Calendar";
import { ShoppingBag } from "@/components/svg/ShoppingBag";
import { Coffee } from "@/components/svg/Coffee";
import { KitchenTools } from "@/components/svg/KitchenTools";
import { Bolt } from "@/components/svg/Bolt";
import { Car } from "@/components/svg/Car";
import classNames from "classnames";

type Service = {
  caption: string;
  icon: ReactNode;
};

type ServiceEntry = Service & { id: number };

const services: ServiceEntry[] = [
  { id: 1, caption: "Manage Booking", icon: <Calendar /> },
  { id: 2, caption: "Excess Baggage", icon: <ShoppingBag /> },
  { id: 3, caption: "Paid Lounge Access", icon: <Coffee className={styles.coffee} /> },
  { id: 4, caption: "Oxyr Airport Hotel", icon: <KitchenTools /> },
  { id: 5, caption: "AI Maha Services", icon: <Bolt /> },
  { id: 6, caption: "Car Rentals", icon: <Car /> },
];

export const Journey = () => {
  return (
    <Container className={styles.wrapper}>
      <h2 className={styles.title}>Complement Your Journey</h2>
      <p className={styles.subtitle}>
        Explore the additional services we offer to make your journey even more memorable
      </p>
      <div className={styles.services}>
        {services.map(({ id, caption, icon }, index) => {
          const classes = classNames(styles.service, { [styles.active]: index === 0 });
          return (
            <div key={id} className={classes}>
              <div className={styles.icon}>
                <div className={styles.ripples} />
                {icon}
              </div>
              <p className={styles.caption}>{caption}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
