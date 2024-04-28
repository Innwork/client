import {ContainerModule, TextModule} from "@src/shared/scss";
import classes from "@src/widgets/сhoose-location/chooseLoaction.module.scss";
import {useClass} from "@src/shared/hooks";

export const ChooseLocation = () => {
    return (
        <section className={useClass([
            ContainerModule.wrapper, classes.location_container
        ])}>
            <div className={classes.head_text}>
                <h4 className={TextModule.h3__medium}>
                    Расположение.
                </h4>

                <p className={TextModule.paragraph}>
                    INNWORK расположен в удобной локации, легко доступной из любой точки города. Рядом с нами есть
                    торговые центры, множество кафе, ресторанов и магазинов, что делает его идеальным местом для работы
                    и общения.
                </p>
            </div>

            <div className={classes.map_frame}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A752c3ccbd67dff2be2e89f1052377619562853a3c371a4f9973767077e87a87e&amp;source=constructor&&scroll=false"
                    width="100%" height="600"></iframe>
            </div>
        </section>
    );
};