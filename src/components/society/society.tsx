"use client";

import Image from "next/image";
import styles from "./society.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface StatCard {
  title: string;
  value: string | number;
}

interface SocialCard {
  icon: string;
  link: string;
}

export default function Society() {
  const t = useTranslations("society");

  const stats: StatCard[] = [
    { title: t("participants"), value: "20K" },
    { title: t("ambassadors"), value: "12" },
    { title: t("societies"), value: "4" },
  ];

  const socials: SocialCard[] = [
    { icon: "/instagram.svg", link: t("instagram") },
    { icon: "/twitter.svg", link: t("twitter") },
    { icon: "/telegram.svg", link: t("telegram") },
  ];

  return (
    <div className={styles.society}>
      <h2 className={styles.society__title}>
        {t("title")}{" "}
        <span className={styles.society__subtitle}>{t("subtitle")}</span>
      </h2>
      <div className={styles.society__cards}>
        <div className={styles.society__stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.society__stat_card}>
              <p className={styles.society__stat_title}>{stat.title}</p>
              <h3 className={styles.society__stat_value}>{stat.value}</h3>
            </div>
          ))}
        </div>
        <div className={styles.society__socials}>
          {socials.map((social, index) => (
            <Link
              href={social.link}
              key={index}
              className={styles.society__social_card}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={social.icon}
                alt="social icon"
                width={103}
                height={103}
                className={styles.society__social_icon}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
