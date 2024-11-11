"use client";

import Image from "next/image";
import styles from "./hero.module.css";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__title}>{t("title")}</div>
        <div className={styles.hero__image_wrapper}>
          <Image
            className={styles.hero__image}
            src="/ellipse.svg"
            alt="hero_image"
            width={575}
            height={575}
            priority
          />

          <Image
            className={styles.hero__image_coin}
            src="/bars1.png"
            alt="barscoin image"
            width={237}
            height={271}
          />
          <Image
            className={styles.hero__image_coin2}
            src="/bars2.png"
            alt="barscoin image"
            width={237}
            height={271}
          />
        </div>
      </div>
      <div className={styles.hero__buttons_wrapper}>
        <button className={`${styles.hero__connect} ${styles.hero__button}`}>
          {t("buttons.connect")}
        </button>
        <button className={`${styles.hero__add} ${styles.hero__button}`}>
          {t("buttons.add")}
        </button>
      </div>
    </div>
  );
}
