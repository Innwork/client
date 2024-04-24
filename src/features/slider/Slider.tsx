import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import {FC, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {GlobalContext} from "@src/app/provider";
import {BasePagination} from "@src/features/slider/ui/BasePagination";
import {useSlides} from "@src/shared/hooks";
import classes from "@src/features/slider/style/slider.module.scss";
import 'swiper/css';

export interface ISlider {
    children: Array<ReactNode>
    slidesPerView: number
    sizeBoolean: boolean

}

export const Slider:FC<ISlider> = ({children, slidesPerView, sizeBoolean}) => {
    const {globalResize} = useContext(GlobalContext)!;
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = useSlides(sizeBoolean, slidesPerView, children.length)

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
                spaceBetween={"25px"}
                slidesPerView={sizeBoolean ? slidesPerView : 1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={classes.swiper_container}
                autoHeight={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {children.map((el, index) => <SwiperSlide key={index} className={classes.swiper_slide}>
                    {el}
                </SwiperSlide>)}
            </Swiper>

            {
               !globalResize.isScreenLg && <BasePagination totalSlides={totalSlides} activeIndex={activeIndex}/>
            }
        </>
    );
};
