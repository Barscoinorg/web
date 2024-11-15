"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("header.links");

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__left}>
          <Image src="/Barscoin.svg" alt="logo" width={148} height={26} />
          <p className={styles.footer__copyright}>© 2024 Barscoin</p>
        </div>
        <div className={styles.footer__right}>
          <div className={styles.footer__links}>
            <Link href="/">{t("about")}</Link>
            <Link href="/">{t("swap")}</Link>
            <Link href="/">{t("referral")}</Link>
            <Link href="/">{t("contacts")}</Link>
          </div>

          <div className={styles.footer__socials}>
            <Link href="/" className={styles.footer__social}>
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/" className={styles.footer__social}>
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/" className={styles.footer__social}>
              <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
            </Link>
            <Link href="/" className={styles.footer__social}>
              <Image src="/behance.svg" alt="behance" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
