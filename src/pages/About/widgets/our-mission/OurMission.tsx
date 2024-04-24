import {FC} from "react";
import {ContainerModule, TextModule} from "@src/shared/scss";
import classes from "@src/pages/About/widgets/our-mission/ourMission.module.scss";

export interface IOurMission {
    header: string;
    text: string;
    img: string
}

export const OurMission:FC<IOurMission> = (props) => {
    const {header, text, img} = props;

    return (
        <div className={ContainerModule.wrapper}>
            <div className={classes.our_mission_container}>
                <div className={classes.our_mission_text}>
                    <h3 className={TextModule.h3__medium}>{header}</h3>

                    <p className={TextModule.paragraph}>{text}</p>
                </div>

                <div className={classes.our_mission_img}>
                    <img src={img} alt={img}/>
                </div>
            </div>
        </div>
    );
};