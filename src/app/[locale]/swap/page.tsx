"use client";

import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Swap from "@/components/swap/swap";

export default function SwapPage() {
  return (
    <div className={styles.page}>
      <div className={styles.swap__block}>
        <Header variant="dark" />
        <Swap />
      </div>
      <Footer />
    </div>
  );
}
