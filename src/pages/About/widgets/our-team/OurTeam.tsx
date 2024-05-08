import {ContainerModule, TextModule} from "@src/shared/scss";
import classes from "@src/pages/About/widgets/our-team/ourTeam.module.scss";
import {Slider} from "@src/features/slider";
import {FC, useContext} from "react";
import {GlobalContext} from "@src/app/provider";
import {SkeletonImageLoader} from "@src/shared/ui/skeleton/Skeleton";


export type TeamMember = {
    src: string,
    fullName: string,
    post: string
}

export interface IOurTeam {
    children: Array<TeamMember>
}

export const OurTeam: FC<IOurTeam> = ({children}) => {
    const {globalResize} = useContext(GlobalContext)!;

    return (
        <section className={ContainerModule.wrapper}>
            <div className={classes.container_text}>
                <h3 className={TextModule.h3__medium}>Познакомьтесь с нашей командой</h3>
                <p className={TextModule.paragraph}>Наш коллектив – это талантливые и мотивированные люди, объединенные
                    общими целями</p>
            </div>

            <div>
                <Slider slidesPerView={3} sizeBoolean={globalResize.isScreenLg}>
                    {children.map((el) => <div className={classes.container_card}>
                        <div className={classes.container_card__img}>
                            <SkeletonImageLoader src={el.src}/>
                        </div>

                        <div className={classes.container_card__text}>
                            <h4 className={TextModule.h5__regular}>{el.fullName}</h4>
                            <p className={TextModule.paragraph}>{el.post}</p>
                        </div>
                    </div>)}
                </Slider>
            </div>
        </section>
    );
};