import Image from "next/image";
import styles from "./exchange_card.module.css";
import { ExchangeCard as ExchangeCardType } from "./types";
import { useTranslations } from "next-intl";

interface Props {
  data: ExchangeCardType;
  type: "cex" | "dex";
}

export function ExchangeCard({ data, type }: Props) {
  const t = useTranslations("buy");
  const {
    logo,
    name,
    isComingSoon,
    backgroundImage,
    link,
    logoWidth = 40,
    logoHeight = 40,
    backgroundColor,
  } = data;

  const cardStyle =
    type === "cex"
      ? { backgroundColor: backgroundColor || "#1E1E1E" }
      : backgroundImage
      ? { backgroundImage: `url(${backgroundImage})` }
      : undefined;

  return (
    <div className={styles.card} style={cardStyle}>
      <Image
        src={logo}
        alt={name}
        width={logoWidth}
        height={logoHeight}
        className={styles.logo}
      />

      {isComingSoon ? (
        <div className={styles.comingSoon}>{t("comingSoon")}</div>
      ) : (
        type === "dex" && (
          <div className={styles.buttons}>
            <button
              onClick={() => window.open(link, "_blank")}
              className={styles.button}>
              {t("learnMore")}
            </button>
            <button
              onClick={() => window.open(link, "_blank")}
              className={styles.button}>
              {t("goTo")}
            </button>
          </div>
        )
      )}
    </div>
  );
}
