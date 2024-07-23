import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TextModule } from "@src/shared/scss";
import cls from "./styles/locCard.module.scss";
import { LocCardType } from "./type/LocCardType";


export const LocCard:FC<LocCardType> = ({img, name, location, desc, area, jobs, floor}) => {
  return (
    <article className={cls.container__card}>
      <section>
        <Swiper
          slidesPerView={1}
          spaceBetween={"10px"}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {img.map((el, index) => (
            <SwiperSlide className={cls.slide} key={index}>
              <img src={el} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <header className={cls.header}>
        <div className={cls.status}>
          <p className={TextModule.span}>Доступно</p>
        </div>

        <div className={cls.header__text}>
          <h5 className={TextModule.h5__regular}>{name}</h5>
          <p className={TextModule.span}>{location}</p>
        </div>

        <p className={TextModule.paragraph}>
          {desc}
        </p>
      </header>

      <footer className={cls.footer}>
        <div className={cls.footer__item}>
          <p className={TextModule.paragraph}>{area}</p>
          <span className={TextModule.span__small}>Площадь м&sup2;</span>
        </div>

        <div className={cls.footer__item}>
          <p className={TextModule.paragraph}>{jobs}</p>
          <span className={TextModule.span__small}>Рабочих мест</span>
        </div>

        <div className={cls.footer__item}>
          <p className={TextModule.paragraph}>{floor}</p>
          {
            floor <= 5 ? <span className={TextModule.span__small}>Этажа</span> : 
              <span className={TextModule.span__small}>Этажей</span>
          }
        </div>
      </footer>
    </article>
  )
}
