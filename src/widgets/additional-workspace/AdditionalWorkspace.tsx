import {ContainerModule, TextModule} from "@src/shared/scss";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import classes from "@src/widgets/additional-workspace/style/AdditionMain.module.scss";
import {useClass} from "@src/shared/hooks";
import {SmallCards} from "@src/shared/ui/cards";
import {CardModel} from "@src/widgets/additional-workspace/model/CardsModel";
import {Slider} from "@src/features/slider";
import {useContext} from "react";
import {GlobalContext} from "@src/app/provider";
import {useActions} from "@src/app/redux/hooks/useActions";


export const AdditionalWorkspace = () => {
    const {globalResize} = useContext(GlobalContext)!;
    const {setIsOpen} = useActions()


    return (
        <section className={
            useClass([ContainerModule.wrapper, classes.container])
        }>
            <div className={classes.head}>
                <h4 className={TextModule.h3__medium}>
                    Пространства, которые вы можете забронировать.
                </h4>

                <div className={classes.head_text}>
                    <p className={TextModule.paragraph}>
                        Позвоните нам или оставьте заявку на сайте.
                        Мы перезвоним вам в скором времени.
                    </p>
                </div>
            </div>

            <Slider slidesPerView={3} sizeBoolean={globalResize.isScreenLg}>
                {CardModel.map((el) => <SmallCards icon={el.icon} title={el.title} subtitle={el.subtitle}
                                                   key={el.title} state={"dark"}/>)}
            </Slider>
        </section>
    );
};