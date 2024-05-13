import {ContainerModule, TextModule} from "@src/shared/scss";
import classes from "@src/widgets/plane/style/Plane.module.scss";
import {PlaneCardModel} from "@src/widgets/plane/model/PlaneCardModel";
import {CardPlane} from "@src/features/card/card-plane";
import {useContext} from "react";
import {GlobalContext} from "@src/app/provider";
import {Slider} from "@src/features/slider";
import {useTranslation} from "react-i18next";

export const Plane = () => {
    const {globalResize} = useContext(GlobalContext)!;
    const {t} = useTranslation('home')

    return (
        <section className={ContainerModule.wrapper}>
            <div className={classes.head}>
                <h3 className={TextModule.h3__medium}>
                    {t("Гибкие тарифы")}
                </h3>

                <p className={TextModule.paragraph}>
                    {t("Innwork предлагает площадки и сервисы для комфортной работы и решения разных задач.")}
                </p>
            </div>

            {
                <Slider sizeBoolean={globalResize.isScreenSm} slidesPerView={!globalResize.isScreenLg ? 2 : 4} navCarets>
                    {PlaneCardModel.map((el) => <CardPlane
                        tag={el.tag}
                        header={el.header}
                        subtitle={el.subtitle}
                        src={el.src}
                        service={el.service}
                        rules={el.rules}
                        price={el.price}
                        key={el.header}
                    />)}
                </Slider>
            }
        </section>
    );
};
