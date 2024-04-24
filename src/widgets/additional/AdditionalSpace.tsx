import classes from "@src/widgets/additional/style/AdditionalSpace.module.scss";
import {AdditionalPaginationItems} from "@src/widgets/additional/ui/AdditionalPaginationItems";
import {additionalModal} from "@src/widgets/additional/model/AdditionalModel";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {AdditionSlide} from "@src/widgets/additional/ui/AdditionSlide";
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import 'swiper/css';



export const AdditionalSpace = ({column=false}: {column?: boolean}) => {
    const {t} = useTranslation("main");
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        if (swiperRef.current){
            swiperRef.current.swiper.slideTo(activeIndex)
        }
    }, [activeIndex])

    return (
        <>

            <div className={column ? classes.swiper_container__column : classes.swiper_container}>
                <Swiper className={column ? classes.swiper_column : classes.swiper}
                        ref={swiperRef}
                        direction={"vertical"}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.activeIndex)
                        }}
                >
                    {
                        additionalModal.slides.map((el, index) =>
                            <SwiperSlide key={index}>
                                <AdditionSlide
                                    src={el.src}
                                    header={t(el.header)}
                                    price={t(el.price)}

                                />
                            </SwiperSlide>
                        )
                    }
                </Swiper>


                <div className={column ? classes.pagination_column : classes.pagination}>
                    {
                        additionalModal.pagination.map(
                            (el, index) =>
                                <AdditionalPaginationItems
                                    src={el.src}
                                    header={t(el.header)}

                                    title={t(el.title)}
                                    price={t(el.price)}
                                    key={el.src}
                                    index={{
                                        currentIndex: index,
                                        activeIndex: activeIndex,
                                        setActiveIndex: setActiveIndex
                                    }}
                                />
                        )
                    }
                </div>

            </div>
        </>
    );
};
