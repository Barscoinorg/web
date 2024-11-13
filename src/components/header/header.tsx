"use client";

import Image from "next/image";
import styles from "./header.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { ConnectButtonCustom } from "@/shared/connect-button";

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const t = useTranslations("header.links");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <div className={`${styles.header} ${styles[`header_${variant}`]}`}>
      <div className={styles.header__container}>
        <Image
          src={variant === "light" ? "/barscoin.svg" : "/barscoin_dark.svg"}
          alt="logo"
          width={157}
          height={26}
          className={styles.header__logo}
        />
        <button
          className={`${styles.burger} ${
            isMenuOpen ? styles.burger_active : ""
          } ${styles[`burger_${variant}`]}`}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`${styles.header__mobile} ${
            isMenuOpen ? styles.header__mobile_active : ""
          }`}>
          <div
            className={`${styles.header__links} ${
              styles[`header__links_${variant}`]
            }`}>
            <Link href="/" onClick={toggleMenu}>
              {t("about")}
            </Link>
            <Link href="/swap" onClick={toggleMenu}>
              {t("swap")}
            </Link>
            <Link href="/referal" onClick={toggleMenu}>
              {t("referral")}
            </Link>
            <Link href="/" onClick={toggleMenu}>
              {t("contacts")}
            </Link>
          </div>
          <div className={styles.header__buttons}>
            <ConnectButtonCustom
              buttonClassName={`${styles.header__connect} ${
                styles[`header__connect_${variant}`]
              }`}
            />
            <button
              className={`${styles.header__user} ${
                styles[`header__user_${variant}`]
              }`}>
              <Image
                src={variant === "light" ? "/user.svg" : "/user_dark.svg"}
                alt="user"
                width={28}
                height={28}
              />
            </button>
            <button
              className={`${styles.header__world} ${
                styles[`header__world_${variant}`]
              }`}>
              <Image
                src={variant === "light" ? "/world.svg" : "/world_dark.svg"}
                alt="world"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
