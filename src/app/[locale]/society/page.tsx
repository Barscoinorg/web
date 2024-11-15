"use client";

import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Society from "@/components/society/society";
import AuthGuard from "@/components/auth/auth-guard";

export default function SocietyPage() {
  return (
    <AuthGuard>
      <div className={styles.page}>
        <div className={styles.society__block}>
          <Header variant="dark" />
          <Society />
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}
