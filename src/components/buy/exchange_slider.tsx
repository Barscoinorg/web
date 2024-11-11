import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ExchangeSection } from "./types";
import { ExchangeCard } from "./exchange_card";
import styles from "./exchange_slider.module.css";

interface Props {
  section: ExchangeSection;
  type: "cex" | "dex";
}

export function ExchangeSlider({ section, type }: Props) {
  return (
    <div className={styles.slider}>
      <h3 className={styles.title}>{section.title}</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        className={styles.swiper}>
        {section.exchanges.map((exchange, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <ExchangeCard data={exchange} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
