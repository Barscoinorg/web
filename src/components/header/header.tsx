import Image from "next/image";
import styles from "./header.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { ConnectButtonCustom } from "@/shared/connect-button";

export default function Header() {
  const t = useTranslations("header.links");
  const tButtons = useTranslations("header.buttons");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Image
          src="/barscoin.svg"
          alt="logo"
          width={157}
          height={26}
          className={styles.header__logo}
        />
        <button
          className={`${styles.burger} ${
            isMenuOpen ? styles.burger_active : ""
          }`}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`${styles.header__mobile} ${
            isMenuOpen ? styles.header__mobile_active : ""
          }`}>
          <div className={styles.header__links}>
            <Link href="/" onClick={toggleMenu}>
              {t("about")}
            </Link>
            <Link href="/" onClick={toggleMenu}>
              {t("swap")}
            </Link>
            <Link href="/" onClick={toggleMenu}>
              {t("referral")}
            </Link>
            <Link href="/" onClick={toggleMenu}>
              {t("contacts")}
            </Link>
          </div>
          <div className={styles.header__buttons}>
            <ConnectButtonCustom buttonClassName={styles.header__connect} />
            <button className={styles.header__user}>
              <Image src="/user.svg" alt="user" width={28} height={28} />
            </button>
            <button className={styles.header__world}>
              <Image src="/world.svg" alt="world" width={28} height={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
