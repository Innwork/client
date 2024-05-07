import React, {FC, ReactNode, useContext, useEffect, useRef} from 'react';
import classes from "@src/features/slider/style/slider.module.scss";
import {GlobalContext} from "@src/app/provider";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperClass} from "swiper/swiper-react";

interface AutoplaySliderProps {
  children: Array<ReactNode>
  slidesPerView?: number
  className?: string
  spaceBetween?: string
}

export const AutoplaySlider:FC<AutoplaySliderProps> = (props) => {
  const {children, slidesPerView = 1, className, spaceBetween = '0'} = props
  const swiperRef = useRef<SwiperClass | null>(null);
  const {globalResize} = useContext(GlobalContext)!;

  useEffect(() => {
    const swiperInstance = swiperRef.current;

    if (swiperInstance) {
      const adjustSlideHeights = () => {
        let maxHeight = 0;

        swiperInstance.slides.forEach((slide) => {
          const slideHeight = slide.offsetHeight;

          if (slideHeight > maxHeight) maxHeight = slideHeight
        })

        swiperInstance.slides.forEach((slide) => {
          (slide as HTMLElement).style.height = `${maxHeight}.px`
        })

        adjustSlideHeights()
        swiperInstance.on("slideChange", adjustSlideHeights)
        swiperInstance.on("resize", adjustSlideHeights)

        return () => {
          swiperInstance.off('slideChange', adjustSlideHeights);
          swiperInstance.off('resize', adjustSlideHeights);
        }
      }
    }
  }, [globalResize, swiperRef])

  return (
    <Swiper
      loop={true}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      speed={globalResize.isScreenLg ? 900 : 300}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      className={className ? className : classes.swiper_container}
      modules={[Autoplay]}
    >
      {children.map((el, index) => <SwiperSlide key={index} className={classes.swiper_slide}>
        {el}
      </SwiperSlide>)}
    </Swiper>
  );
};