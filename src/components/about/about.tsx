"use client";

import { useTranslations } from "next-intl";
import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <h2 className={styles.about__title}>{t("title")}</h2>
        <p className={styles.about__description}>{t("description")}</p>
      </div>
      <div className={styles.about__image_wrapper}>
        <div
          className={styles.about__ellipse}
          style={{
            width: "597px",
            height: "597px",
          }}>
          <div
            className={styles.about__ellipse_small}
            style={{
              width: "416px",
              height: "416px",
            }}
          />
          <div
            className={`${styles.about__ellipse_small} ${styles.about__add_ellipse}`}
            style={{
              width: "416px",
              height: "416px",
            }}
          />
          <Image
            src="/bars1.png"
            alt="bars1"
            width={200}
            height={223}
            className={styles.about__bars1}
          />
          <Image
            src="/bars4.png"
            alt="bars2"
            width={115}
            height={131}
            className={styles.about__bars2}
          />
          <Image
            src="/chart.svg"
            alt="chart"
            width={292}
            height={395}
            className={styles.about__chart}
          />
        </div>
      </div>
    </div>
  );
}
