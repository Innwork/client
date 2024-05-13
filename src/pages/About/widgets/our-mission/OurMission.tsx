import {FC} from "react";
import {ContainerModule, TextModule} from "@src/shared/scss";
import classes from "@src/pages/About/widgets/our-mission/ourMission.module.scss";
import {SkeletonImageLoader} from "@src/shared/ui/skeleton/Skeleton";
import {useTranslation} from "react-i18next";

export interface IOurMission {
    header: string;
    text: string;
    img: string
}

export const OurMission:FC<IOurMission> = (props) => {
    const {header, text, img} = props;
    const {t} = useTranslation('about')

    return (
        <div className={ContainerModule.wrapper}>
            <div className={classes.our_mission_container}>
                <div className={classes.our_mission_text}>
                    <h3 className={TextModule.h3__medium}>{t(header)}</h3>
                    <p className={TextModule.paragraph}>{t(text)}</p>
                </div>

                <div className={classes.our_mission_img}>
                    <SkeletonImageLoader src={img}/>
                </div>
            </div>
        </div>
    );
};