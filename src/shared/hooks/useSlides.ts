import {useEffect, useState} from "react";

export const useSlides = (screen: boolean, slidesPerView: number, length:number) =>{
    const [totalSlide, setTotalSlide] = useState(length)

    useEffect(() => {
        screen ? setTotalSlide(length - (slidesPerView - 1)) : setTotalSlide(length)
    }, [length, screen, slidesPerView]);

    return totalSlide
}