import {FC, ReactNode, useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import classes from "@src/widgets/banner-home/bannerHome.module.scss";
import {GlobalContext} from "@src/app/provider";

export interface IBannerHome {
    slides: Array<{ src: string, element: ReactNode }>
}

export const BannerHome: FC<IBannerHome> = ({slides}) => {
    const {globalResize} = useContext(GlobalContext)!;

    return (
        <Swiper
            loop={true}
            speed={globalResize.isScreenLg ? 900 : 300}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            className={classes.banner}
            modules={[Autoplay]}
        >
            {slides.map((el, index) => <SwiperSlide key={index}>
                <img className={classes.banner__img} src={el.src} alt={el.src}/>

                {el.element}
            </SwiperSlide>)}
        </Swiper>
    );
};
