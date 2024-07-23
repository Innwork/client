import {ContainerModule, TextModule} from "@src/shared/scss";
import cls from "@src/pages/public/Home/components/additional-workspace/style/AdditionMain.module.scss";
import {useClass} from "@src/shared/hooks";
import {SmallCards} from "@src/shared/ui/cards";
import {CardModel} from "@src/pages/public/Home/components/additional-workspace/model/CardsModel";
import {AutoplaySlider} from "@src/features/slider";
import {useContext} from "react";
import {GlobalContext} from "@src/app/provider";
import {useTranslation} from "react-i18next";
import {useActions} from "@src/app/redux/hooks/useActions";
import {Workspaces} from "@src/app/redux/Booking/BookingTypes";

export const AdditionalWorkspace = () => {
  const {globalResize} = useContext(GlobalContext)!;
  const {t} = useTranslation('home')
  const {setIsOpen, setActiveWorkspace, setPage} = useActions()

  return (
    <section className={
      useClass([ContainerModule.wrapper, cls.container])
    }>
      <div className={cls.head}>
        <h4 className={TextModule.h3__medium}>
          {t("Пространства, которые вы можете забронировать.")}
        </h4>

        <div className={cls.head_text}>
          <p className={TextModule.paragraph}>
            {t("Позвоните нам или оставьте заявку на сайте. Мы перезвоним вам в скором времени.")}
          </p>
        </div>
      </div>

      <AutoplaySlider sizeBoolean={globalResize.isScreenLg} slidesPerView={3} spaceBetween={'25'} stepper>
        {CardModel.map((el) => <SmallCards onClick={() => {
          setIsOpen(true)
          setPage(2)
          setActiveWorkspace(el.title as Workspaces)
        }} icon={el.icon} title={el.title} subtitle={el.subtitle}
                                           key={el.title} state={"dark"}/>)}
      </AutoplaySlider>
    </section>
  );
};