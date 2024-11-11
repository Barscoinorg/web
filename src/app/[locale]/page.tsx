"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Society from "@/components/society/society";
import Ecosystem from "@/components/ecosystem/ecosystem";
import Buy from "@/components/buy/buy";
import Staking from "@/components/staking/staking";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero__block}>
        <Header />
        <Hero />

        <Image
          src="/bg_mountains.svg"
          alt="bg_mountains"
          width={4829}
          height={868}
          className={styles.page__image_bg}
        />

        <Image
          src="/bg_mountains2.svg"
          alt="bg_mountains"
          width={1710}
          height={307}
          className={styles.page__image_bg2}
        />
      </div>
      <div className={styles.about__block}>
        <About />
      </div>
      <div className={styles.society__block}>
        <Society />
      </div>
      <div className={styles.ecosystem__block}>
        <Ecosystem />
      </div>
      <div className={styles.buy__block}>
        <Buy />
      </div>
      <div className={styles.staking__block}>
        <Staking />
      </div>
      <div className={styles.footer__block}>
        <Footer />
      </div>
    </div>
  );
}
