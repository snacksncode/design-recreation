import { Container } from "@/components/Container";
import styles from "./journey.module.scss";
import { ComponentType } from "react";
import { Calendar } from "@/components/svg/Calendar";
import { ShoppingBag } from "@/components/svg/ShoppingBag";
import { Coffee } from "@/components/svg/Coffee";
import { KitchenTools } from "@/components/svg/KitchenTools";
import { Bolt } from "@/components/svg/Bolt";
import { Car } from "@/components/svg/Car";
import classNames from "classnames";
import { SectionHeading } from "@/components/SectionHeading";

type Service = {
  caption: string;
  Icon: ComponentType<{ className: string }>;
};

type ServiceEntry = Service & { id: number };

const services: ServiceEntry[] = [
  { id: 1, caption: "Manage Booking", Icon: Calendar },
  { id: 2, caption: "Excess Baggage", Icon: ShoppingBag },
  { id: 3, caption: "Paid Lounge Access", Icon: Coffee },
  { id: 4, caption: "Oxyr Airport Hotel", Icon: KitchenTools },
  { id: 5, caption: "AI Maha Services", Icon: Bolt },
  { id: 6, caption: "Car Rentals", Icon: Car },
];

export const Journey = () => {
  return (
    <Container className={styles["wrapper"]}>
      <SectionHeading
        title="Complement Your Journey"
        subtitle="Explore the additional services we offer to make your journey even more memorable"
        centerPill
      />
      <div className={styles["services"]}>
        {services.map(({ id, caption, Icon }, index) => {
          const classes = classNames(styles["service"], { [styles["service--active"]]: index === 0 });
          return (
            <div key={id} className={classes}>
              <div className={styles["service__icon"]}>
                <div className={styles["service__ripples"]} />
                <Icon className={styles["service__svg"]} />
              </div>
              <p className={styles["service__caption"]}>{caption}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
