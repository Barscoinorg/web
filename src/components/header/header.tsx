"use client";

import Image from "next/image";
import styles from "./header.module.css";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";

import { useState } from "react";
import { ConnectButtonCustom } from "@/shared/connect-button";

import { logout } from "@/actions";
import { useSessionStore } from "@/store/session";

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const t = useTranslations("header.links");
  const locale = useLocale();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserTooltip, setShowUserTooltip] = useState(false);
  const { isLoggedIn, email } = useSessionStore();
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
          style={{ width: isLoggedIn ? "80%" : "" }}
          className={`${styles.header__mobile} ${
            isMenuOpen ? styles.header__mobile_active : ""
          }`}>
          {isLoggedIn && (
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
              <Link href="/society" onClick={toggleMenu}>
                {t("contacts")}
              </Link>
            </div>
          )}
          <div className={styles.header__buttons}>
            {isLoggedIn ? (
              <>
                <ConnectButtonCustom
                  buttonClassName={`${styles.header__connect} ${
                    styles[`header__connect_${variant}`]
                  }`}
                />
                <div className={styles.header__user_wrapper}>
                  {/* ... остальной код user tooltip ... */}
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button
                    className={`${styles.header__connect} ${
                      styles[`header__connect_${variant}`]
                    }`}>
                    {t("login")}
                  </button>
                </Link>
                <Link href="/register">
                  <button
                    className={`${styles.header__connect} ${
                      styles[`header__connect_${variant}`]
                    }`}>
                    {t("register")}
                  </button>
                </Link>
              </>
            )}
            {isLoggedIn && (
              <div className={styles.header__user_wrapper}>
                <button
                  className={`${styles.header__user} ${
                    styles[`header__user_${variant}`]
                  }`}
                  onMouseEnter={() => setShowUserTooltip(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      if (
                        !document.querySelector(
                          `:hover > .${styles.user_tooltip}`
                        )
                      ) {
                        setShowUserTooltip(false);
                      }
                    }, 100);
                  }}>
                  <Image
                    src={variant === "light" ? "/user.svg" : "/user_dark.svg"}
                    alt="user"
                    width={28}
                    height={28}
                  />
                </button>
                {showUserTooltip && (
                  <div
                    className={styles.user_tooltip}
                    onMouseEnter={() => setShowUserTooltip(true)}
                    onMouseLeave={() => setShowUserTooltip(false)}>
                    <p>{email}</p>
                    <form
                      action={async () => {
                        const result = await logout();
                        if (result.success) {
                          useSessionStore.getState().clearSession();
                          router.push("/login");
                        }
                      }}>
                      <button type="submit" className={styles.logout_button}>
                        {t("logout")}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
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
