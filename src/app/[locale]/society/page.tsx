"use client";

import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Society from "@/components/society/society";

export default function ReferalPage() {
  return (
    <div className={styles.page}>
      <div className={styles.society__block}>
        <Header variant="dark" />
        <Society />
      </div>
      <Footer />
    </div>
  );
}
