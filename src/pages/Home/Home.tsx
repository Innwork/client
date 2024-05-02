import {AdditionalWorkspace} from "@src/widgets/additional-workspace";
import {Plane} from "@src/widgets/plane";
import classes from "@src/pages/Pages.module.scss";
import bannerStyle from "@src/pages/Home/banner.module.scss";
import {AboutUs} from "@src/widgets/about-us";
import {ChooseLocation} from "@src/widgets/сhoose-location";
import {BannerHome} from "@src/widgets/banner-home";

import BannerOne from "@src/shared/assets/img/banner/banner_one.jpg";
import BannerTwo from "@src/shared/assets/img/banner/banner_two.jpg";
import {Calculator} from "@src/widgets/сalculator";
import {TextModule} from "@src/shared/scss";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {useActions} from "@src/app/redux/hooks/useActions";
export const Home = () => {
    const {setIsOpen, setPage} = useActions()

    return (
        <>
            <BannerHome slides={[
                {
                    src: BannerOne,
                    element: <div className={bannerStyle.banner_one__banner}>
                        <div className={bannerStyle.banner_one__content}>
                            <h3 className={TextModule.h3__medium}>Тестовый День в Подарок</h3>
                            <p className={TextModule.paragraph}>
                                Испытайте идеальное сочетание комфорта и продуктивности. Забронируйте ваше место прямо
                                сейчас и насладитесь инновационным рабочим пространством, созданным для воплощения ваших
                                идей в жизнь. Это не просто рабочее место, это шаг к успеху.
                            </p>

                            <MainBtn state={"black"} onClick={() => {
                                setIsOpen(true)
                                setPage(1)
                            }}><span
                                className={TextModule.paragraph}>Забронировать
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
                            <h3 className={TextModule.h3__medium}>Счастливые часы</h3>
                            <h1 className={TextModule.h1}>C 22:00 до 9:00</h1>
                            <p className={TextModule.paragraph}>
                                Наши счастливые часы с 22:00 до 09:00 - это ваша возможность работать в атмосфере тишины
                                и сосредоточенности. Погрузитесь в творческий процесс, когда весь город спит, и дайте
                                волю своим идеям в уединении нашего пространства.
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