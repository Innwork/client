import {FC, useContext} from "react";
import {ContainerModule, TextModule} from "@src/shared/scss";
import {Link, useLocation} from "react-router-dom";
import Arrow from "@assets/icons/ui/arrow.svg";
import cls from "@src/widgets/about-us/style/About.module.scss";
import {CardBenefits} from "@src/widgets/about-us/model/CardBenefits";
import {SmallCards} from "@src/shared/ui/cards";
import {GlobalContext} from "@src/app/provider";
import {AutoplaySlider} from "@src/features/slider";
import {useTranslation} from "react-i18next";

export const AboutUs: FC = () => {
  const {globalResize} = useContext(GlobalContext)!;
  const location = useLocation();
  const {t} = useTranslation('home')

  return (
    <section className={ContainerModule.wrapper}>
      <div className={cls.container}>
        <p className={TextModule.h6__light}>{t("О нас")}</p>

        <div className={cls.content}>
          <h2 className={TextModule.h1}>
            Connect and create with us.
          </h2>

          <div className={cls.content__separator}></div>

          <div className={cls.text}>
            <p className={TextModule.paragraph}>
              {t("INNWORK - это современное пространство, предназначенное для тех, кто ищет не только место для работы, но и источник вдохновения. Разнообразные рабочие зоны подходят как для индивидуальных фрилансеров, так и для крупных команд, желающих реализовать масштабные проекты. Вежливый персонал, современное оборудование, различные тарифные планы удовлетворят потребности каждого посетителя. Приходите и станьте частью нашего творческого и динамичного пространства!")}
            </p>

            {
              location.pathname !== "/about" && <Link to={"/about"} className={cls.text__link}>
                            <span className={TextModule.h6__regular}>
                                {t("Узнать о нас чуточку больше")}
                            </span>
                <Arrow className={cls.text__link_arrow}/>
              </Link>
            }

          </div>
        </div>
      </div>

      {
        location.pathname !== "/about" && <>

          <div className={cls.grid}>
            {CardBenefits.map((el) => <SmallCards icon={el.icon} title={el.title} subtitle={el.subtitle}
                                                  state={"light"} key={el.title}/>)}
          </div>

          {
            !globalResize.isScreenLg && <AutoplaySlider spaceBetween={'25'} stepper>
              {CardBenefits.map((el) => <SmallCards icon={el.icon} title={el.title} subtitle={el.subtitle}
                                                    key={el.title} state={"light"}/>)}
            </AutoplaySlider>
          }
        </>
      }

    </section>
  );
};
