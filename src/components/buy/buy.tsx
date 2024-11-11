"use client";

import { useTranslations } from "next-intl";
import styles from "./buy.module.css";
import { ExchangeSlider } from "./exchange_slider";
import { ExchangeSection } from "./types";

export default function Buy() {
  const t = useTranslations("buy");

  const cexSection: ExchangeSection = {
    title: t("cex"),
    exchanges: [
      {
        logo: "/binance.svg",
        name: "Binance",
        isComingSoon: true,
        link: "https://binance.com",
        logoWidth: 158,
        logoHeight: 31,
      },
      {
        logo: "/okx.svg",
        name: "OKX",
        isComingSoon: true,
        link: "https://okx.com",
        logoWidth: 103,
        logoHeight: 31,
        backgroundColor: "#4F4F4F",
      },
      {
        logo: "/cryptocom.svg",
        name: "Cryptocom",
        isComingSoon: true,
        link: "https://cryptocom.com",
        logoWidth: 37,
        logoHeight: 42,
        backgroundColor: "#02387C",
      },
    ],
  };

  const dexSection: ExchangeSection = {
    title: t("dex"),
    exchanges: [
      {
        logo: "/uniswap.svg",
        name: "Uniswap",
        backgroundImage: "/uniswap_card.svg",
        link: "https://uniswap.org",
        logoWidth: 37,
        logoHeight: 42,
      },
      {
        logo: "/pancakeswap.svg",
        name: "Pancakeswap",
        backgroundImage: "/pancakeswap_card.svg",
        link: "https://pancakeswap.org",
        logoWidth: 42,
        logoHeight: 42,
      },
      {
        logo: "/cryptocom.svg",
        name: "Cryptocom",
        backgroundImage: "/cryptocom_card.svg",
        link: "https://cryptocom.com",
        logoWidth: 37,
        logoHeight: 42,
      },
    ],
  };

  return (
    <div className={styles.buy}>
      <h2 className={styles.title}>{t("title")}</h2>
      <div className={styles.descriptionBlock}>
        <p className={styles.description}>{t("description")}</p>
        <p className={styles.description2}>{t("description2")}</p>
      </div>

      <div className={styles.sliders}>
        <ExchangeSlider section={cexSection} type="cex" />
        <ExchangeSlider section={dexSection} type="dex" />
      </div>
    </div>
  );
}
