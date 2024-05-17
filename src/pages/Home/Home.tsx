import {AdditionalWorkspace} from "@src/widgets/additional-workspace";
import {Plane} from "@src/widgets/plane";
import classes from "@src/pages/Pages.module.scss";
import bannerStyle from "@src/pages/Home/banner.module.scss";
import {AboutUs} from "@src/widgets/about-us";
import {ChooseLocation} from "@src/widgets/сhoose-location";
import {BannerHome} from "@src/widgets/banner-home";
import BannerOne from "@assets/img/banner/banner_one.jpg";
import BannerTwo from "@assets/img/banner/banner_two.jpg";
import {Calculator} from "@src/widgets/сalculator";
import {TextModule} from "@src/shared/scss";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {useActions} from "@src/app/redux/hooks/useActions";
import {useTranslation} from "react-i18next";

export const Home = () => {
    const {setIsOpen, setPage} = useActions()
    const {t} = useTranslation('home')

    return (
        <>
            <BannerHome slides={[
                {
                    src: BannerOne,
                    element: <div className={bannerStyle.banner_one__banner}>
                        <div className={bannerStyle.banner_one__content}>
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
                        <div className={bannerStyle.banner_one__triangle}></div>
                        <div className={bannerStyle.banner_one__gradient}></div>
                    </div>
                },
                {
                    src: BannerTwo,
                    element: <div className={bannerStyle.banner_two}>
                        <div className={bannerStyle.banner_two__gradient}></div>
                        <div className={bannerStyle.banner_two__triangle_orange}></div>
                        <div className={bannerStyle.banner_two__triangle_white}></div>

                        <div className={bannerStyle.banner_two__content}>
                            <h3 className={TextModule.h3__medium}>{t("Счастливые Часы")}</h3>
                            <h1 className={TextModule.h3}>{t("С 22 до 9")}</h1>
                            <p className={TextModule.paragraph}>
                                {t("Наши счастливые часы с 22 до 09 - это ваша возможность работать в атмосфере тишины и сосредоточенности. Погрузитесь в творческий процесс, когда весь город спит, и дайте волю своим идеям в уединении нашего пространства.")}
                            </p>
                        </div>
                    </div>
                }
            ]}/>

            <section className={classes.flex_pages}>
                <AdditionalWorkspace/> <Plane/> <Calculator/> <ChooseLocation/> <AboutUs/>
                {/*<Reviews/>*/}
            </section>
        </>
    );
};