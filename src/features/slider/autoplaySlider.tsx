import React, {FC, ReactNode, useContext, useEffect, useRef, useState} from 'react';
import classes from "@src/features/slider/style/slider.module.scss";
import {GlobalContext} from "@src/app/provider";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperClass} from "swiper/swiper-react";
import {BasePagination} from "@src/features/slider/ui/BasePagination";
import {useSlides} from "@src/shared/hooks";

interface AutoplaySliderProps {
  children: Array<ReactNode>
  slidesPerView?: number
  className?: string
  sizeBoolean?: boolean
  spaceBetween?: string
  stepper?: boolean
  delay?: number
}

export const AutoplaySlider:FC<AutoplaySliderProps> = (props) => {
  const {
    children,
    slidesPerView = 1,
    className,
    spaceBetween = '0',
    sizeBoolean = false,
    stepper = false,
    delay = 4000
  } = props

  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = useSlides(sizeBoolean, slidesPerView, children.length)
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
    <>
      <Swiper
        loop
        slidesPerView={sizeBoolean ? slidesPerView : 1}
        spaceBetween={spaceBetween}
        speed={globalResize.isScreenLg ? 900 : 300}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: delay,
          disableOnInteraction: false
        }}
        className={className ? className : classes.swiper_container}
        onSlideChange={({activeIndex}) => setActiveIndex(activeIndex)}
        modules={[Autoplay]}
      >
        {children.map((el, index) => <SwiperSlide key={index} className={classes.swiper_slide}>
          {el}
        </SwiperSlide>)}
      </Swiper>
      {
        !globalResize.isScreenLg && stepper && <BasePagination totalSlides={totalSlides} activeIndex={activeIndex}/>
      }
    </>

  );
};