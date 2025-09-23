import { ContainerModule, TextModule } from "@src/shared/scss";
import cls from "@src/pages/public/Home/components/сhoose-location/styles/chooseLoaction.module.scss";
import { useClass } from "@src/shared/hooks";
import { useTranslation } from "react-i18next";

export const ChooseLocation = () => {
  const { t } = useTranslation("home");
  return (
    <section
      className={useClass([ContainerModule.wrapper, cls.location_container])}
    >
      <div className={cls.head_text}>
        <h4 className={TextModule.h3__medium}>{t("Расположение.")}</h4>

        <p className={TextModule.paragraph}>
          {t(
            "INNWORK расположен в удобной локации, легко доступной из любой точки города. Рядом с нами есть торговые центры, множество кафе, ресторанов и магазинов, что делает его идеальным местом для работы и общения."
          )}
        </p>
      </div>

      <div className={cls.map_frame}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Addd9be84cb367848c00c0d04ec72af6484c828a569687c2f91680cf20c5c44da&amp;source=constructor"
          width="100%"
          height="600"
          title={"Карта"}
        ></iframe>
      </div>
    </section>
  );
};
