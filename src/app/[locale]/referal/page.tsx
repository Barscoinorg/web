"use client";

import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Referal from "@/components/referal/referal";
import AuthGuard from "@/components/auth/auth-guard";

export default function ReferalPage() {
  return (
    <AuthGuard>
      <div className={styles.page}>
        <div className={styles.referal__block}>
          <Header variant="dark" />
          <Referal />
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}
