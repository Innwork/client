import {FC, ReactNode} from "react";
import classes from "@src/widgets/banner-home/bannerHome.module.scss";
import {AutoplaySlider} from "@src/features/slider";

export interface IBannerHome {
    slides: Array<{ src: string, element: ReactNode }>
}

export const BannerHome: FC<IBannerHome> = ({slides}) => {

    return (
        <AutoplaySlider className={classes.banner}>
            {slides.map((el) =>
              <>
                <img className={classes.banner__img} src={el.src} alt={el.src}/>
                {el.element}
            </>)}
        </AutoplaySlider>
    );
};
