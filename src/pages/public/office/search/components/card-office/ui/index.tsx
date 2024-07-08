import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import cls from "@src/pages/public/office/search/components/card-office/styles/cardOffice.module.scss";

import FreeSpace from "@assets/img/plane-card/free-Space.png";
import NonFixed from "@assets/img/plane-card/non-fixed.png";
import PrivateSpace from "@assets/img/plane-card/privateWorkspace.png";
import FixedDesk from "@assets/img/plane-card/fixedDesk.png";
import {TextModule} from "@src/shared/scss";

export const CardOffice = () => {
  const imgs = [FreeSpace, NonFixed, PrivateSpace, FixedDesk];

  return (
    <div className={cls.card}>
      <Swiper
        slidesPerView={1}
        spaceBetween={"10px"}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {imgs.map((el, index) => (
          <SwiperSlide className={cls.slide} key={index}>
            <img src={el} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to="/detail" className={cls.cardLink}>
        <div className={cls.cardLinkHead}>
          <p className={TextModule.h6__regular}>Офис №1</p>

          <div className={cls.cardLinkStatus}>
            <p className={TextModule.paragraph}>Свободно</p>
          </div>
        </div>

        <ul className={cls.ul_card}>
          <li className={TextModule.paragraph}>улица Дзорапа, 70/3</li>
          <li className={TextModule.paragraph}>12 этаж</li>
          <li className={TextModule.paragraph}>500 м<sup>2</sup></li>
        </ul>

        <p className={TextModule.h6__regular}>от 12 000 AMD за 1м<sup>2</sup></p>
      </Link>
    </div>
  );
};
