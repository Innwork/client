import React, {FC, useState} from 'react';
import { MainBtn } from '@src/shared/ui/btn/main-btn/MainBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {PhotoType} from "@src/pages/public/office/detail/components/photo/types/PhotoType";
import cls from "../styles/photo.module.scss";
import {TextModule} from "@src/shared/scss";
import { CentreModal } from '@src/shared/ui/modals';
import Cross from "@assets/icons/WhiteCross.svg"


export const Photo:FC<PhotoType> = ({children}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  
  return (
    <>
      <section className={cls.grid_container}>
        {
          children.map((el, index) => {
            if (index < 5) {
              if (index === 0) {
                return (
                  <div className={cls.grid_container__item_start} key={index}>
                    <img src={el} alt={el} loading='lazy'/>
                  </div>
                );
              } else if (index === 4) {
                return (
                  <div className={cls.grid_container__items_last} key={index} onClick={() => setIsActive(!isActive)}>
                    <div className={cls.grid_container__items_last__bg}></div>
                    <div className={cls.grid_container__items_last__content}>
                      <p className={TextModule.h6}>
                        Еще +{children.length - 5}
                      </p>
                    </div>
                    <img className={cls.grid_container__items_last__img} src={el} alt={el} loading='lazy'/>
                  </div>
                );
              } else {
                return (
                  <div className={cls.grid_container__items_last} key={index}>
                    <img src={el} alt={el} loading='lazy'/>
                  </div>
                );
              }
            }
            return null;
          })
        }
      </section>

      <CentreModal isOpen={isActive} setIsOpen={setIsActive}>
        <div className={cls.modal}>
          <header>
            <p className={TextModule.h6__regular}>Фото</p>

            <MainBtn onClick={() => setIsActive(!isActive)}><Cross width={"32px"} height={"32px"}/></MainBtn>
          </header>

          <Swiper className={cls.slider} spaceBetween={"10px"} pagination={{clickable: true}} modules={[Pagination]} navigation>
            {children.map(el => <SwiperSlide key={el} className={cls.slide}>
              <img src={el} alt={el} loading='lazy'/>
            </SwiperSlide>)}
          </Swiper>
        </div>
      </CentreModal>
    </>
  );
};
