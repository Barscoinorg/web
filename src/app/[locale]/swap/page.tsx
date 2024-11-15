"use client";

import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Swap from "@/components/swap/swap";
import Image from "next/image";
import AuthGuard from "@/components/auth/auth-guard";

export default function SwapPage() {
  return (
    <AuthGuard>
      <div className={styles.page}>
        <div className={styles.swap__block}>
          <Header variant="dark" />
          <Swap />

          <Image
            src="/bars1.png"
            alt="coin"
            width={160}
            height={160}
            className={`${styles.coin} ${styles.coin1}`}
          />
          <Image
            src="/bars2.png"
            alt="coin"
            width={92}
            height={92}
            className={`${styles.coin} ${styles.coin2}`}
          />
          <Image
            src="/bars1.png"
            alt="coin"
            width={160}
            height={160}
            className={`${styles.coin} ${styles.coin3}`}
          />
          <Image
            src="/bars2.png"
            alt="coin"
            width={92}
            height={92}
            className={`${styles.coin} ${styles.coin4}`}
          />
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}
