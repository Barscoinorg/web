"use client";

import Image from "next/image";
import styles from "./staking.module.css";
import { useTranslations } from "next-intl";

export default function Staking() {
  const t = useTranslations("staking");

  return (
    <div className={styles.staking}>
      <div className={styles.staking__content}>
        <h2 className={styles.staking__title}>{t("title")}</h2>
        <p className={styles.staking__description}>{t("description")}</p>
        <button className={styles.staking__button}>{t("button")}</button>

        <div className={styles.staking__stats}>
          <div className={styles.staking__stat}>
            <h3>{t("qantity.title")}</h3>
            <p>{t("qantity.description")}</p>
          </div>
          <div className={styles.staking__stat}>
            <h3>{t("holders.title")}</h3>
            <p>{t("holders.description")}</p>
          </div>
        </div>
      </div>

      <div className={styles.staking__image}>
        <Image
          src="/staking_bg.png"
          alt="Staking background"
          width={527}
          height={447}
          priority
        />
      </div>
    </div>
  );
}
