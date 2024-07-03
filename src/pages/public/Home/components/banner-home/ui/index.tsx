import {FC} from "react";
import cls from "@src/pages/public/Home/components/banner-home/styles/bannerHome.module.scss";
import {AutoplaySlider} from "@src/features/slider";
import BannerOne from "@assets/img/banner/banner_one.jpg";
import BannerTwo from "@assets/img/banner/banner_two.jpg";
import {TextModule} from "@src/shared/scss";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {useActions} from "@src/app/redux/hooks/useActions";
import {useTranslation} from "react-i18next";
import {BannerType} from "@src/pages/public/Home/components/banner-home/types/BannerType";

export const BannerHome: FC = () => {
  const {setIsOpen, setPage} = useActions()
  const {t} = useTranslation('home')

  const slides:Array<BannerType> = [
    {
      src: BannerOne,
      element: <div className={cls.banner_one__banner}>
        <div className={cls.banner_one__content}>
          <h3 className={TextModule.h3__medium}>{t("Тестовый День в Подарок")}</h3>
          <p className={TextModule.paragraph}>
            {t("Испытайте идеальное сочетание комфорта и продуктивности. Забронируйте ваше место прямо сейчас и насладитесь инновационным рабочим пространством, созданным для воплощения ваших идей в жизнь. Это не просто рабочее место, это инкубатор для вашего творчества и успеха.")}
          </p>

          <MainBtn state={"black"} onClick={() => {
            setIsOpen(true)
            setPage(1)
          }}><span
            className={TextModule.paragraph}>{t("Забронировать")}
                            </span></MainBtn>
        </div>
        <div className={cls.banner_one__triangle}></div>
        <div className={cls.banner_one__gradient}></div>
      </div>
    },
    {
      src: BannerTwo,
      element: <div className={cls.banner_two}>
        <div className={cls.banner_two__gradient}></div>
        <div className={cls.banner_two__triangle_orange}></div>
        <div className={cls.banner_two__triangle_white}></div>

        <div className={cls.banner_two__content}>
          <h3 className={TextModule.h3__medium}>{t("Счастливые Часы")}</h3>
          <h1 className={TextModule.h3}>{t("С 21 до 9")}</h1>
          <p className={TextModule.paragraph}>
            {t("Наши счастливые часы с 21 до 09 - это ваша возможность работать в атмосфере тишины и сосредоточенности. Погрузитесь в творческий процесс, когда весь город спит, и дайте волю своим идеям в уединении нашего пространства.")}
          </p>
        </div>
      </div>
    }

  ]

  return (
    <AutoplaySlider className={cls.banner} delay={6000}>
      {slides.map((el) =>
        <>
          <img className={cls.banner__img} src={el.src} alt={el.src} loading="lazy"/>
          {el.element}
        </>)}
    </AutoplaySlider>
  );
};
