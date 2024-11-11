"use client";

import Image from "next/image";
import styles from "./ecosystem.module.css";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface EcosystemCard {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  link: string;
}

export default function Ecosystem() {
  const t = useTranslations("ecosystem");

  const cards: EcosystemCard[] = [
    {
      title: t("cards.academy.title"),
      subtitle: t("cards.academy.description"),
      image: t("cards.academy.image"),
      buttonText: t("cards.academy.button"),
      link: t("cards.academy.link"),
    },
    {
      title: t("cards.chatbot.title"),
      subtitle: t("cards.chatbot.description"),
      image: t("cards.chatbot.image"),
      buttonText: t("cards.chatbot.button"),
      link: t("cards.chatbot.link"),
    },
    {
      title: t("cards.staking.title"),
      subtitle: t("cards.staking.description"),
      image: t("cards.staking.image"),
      buttonText: t("cards.staking.button"),
      link: t("cards.staking.link"),
    },
  ];

  return (
    <div className={styles.ecosystem}>
      <h2 className={styles.ecosystem__title}>{t("title")}</h2>
      <div className={styles.ecosystem__slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          className={styles.ecosystem__swiper}>
          {cards.map((card, index) => (
            <SwiperSlide key={index} className={styles.ecosystem__slide}>
              <div className={styles.ecosystem__card}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={488}
                  height={488}
                  className={styles.ecosystem__card_image}
                />
                <div className={styles.ecosystem__card_content}>
                  <h3 className={styles.ecosystem__card_title}>{card.title}</h3>
                  <p className={styles.ecosystem__card_subtitle}>
                    {card.subtitle}
                  </p>
                  <a href={card.link} className={styles.ecosystem__card_button}>
                    {card.buttonText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </div>
  );
}
