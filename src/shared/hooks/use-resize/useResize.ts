import { useEffect, useState } from "react";
import {
    SCREEN_ES, SCREEN_LG, SCREEN_MD, SCREEN_SM, SCREEN_XL, SCREEN_XXL
} from "@src/shared/hooks/use-resize/constants/constants";

export const useResize = () => {
    const [pathWidth, setPathWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handlerResize = (event: Event) =>{
            setPathWidth((event.target as Window).innerWidth)
        }

        window.addEventListener('resize', handlerResize)

        return () => {
            window.removeEventListener("resize", handlerResize)
        }
    }, []);

    return{
        pathWidth,
        isScreenEs: pathWidth >= SCREEN_ES,
        isScreenSm: pathWidth >= SCREEN_SM,
        isScreenMd: pathWidth >= SCREEN_MD,
        isScreenLg: pathWidth >= SCREEN_LG,
        isScreenXl: pathWidth >= SCREEN_XL,
        isScreenXXL: pathWidth >= SCREEN_XXL
    }
}