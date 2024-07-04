import {AboutUs} from "@src/widgets/about-us";
import {Banner} from "@src/pages/public/About/widgets/banner/ui";
import OurMissionWomen from "@assets/img/About/women.png";
import AboutBanner from "@assets/img/About/about.png";
import {ContainerModule, TextModule} from "@src/shared/scss";
import {OurTeam} from "@src/pages/public/About/widgets/our-team/OurTeam";
import {OurMission} from "@src/pages/public/About/widgets/our-mission/OurMission";
import {team} from "@src/pages/public/About/model/team";
import {useTranslation} from "react-i18next";

export const About = () => {
    const {t} = useTranslation('about')
    return (
        <section className={ContainerModule.flex_pages}>
            <Banner src={AboutBanner}>
                <h3 className={TextModule.h1}>{t("О нас")}</h3>
            </Banner>
            <AboutUs/>
            <OurMission
                img={OurMissionWomen}
                header={"Наша миссия"}
                text={"Наша миссия, каждый день создавать поддерживающее и вдохновляющее пространство для ваших возможностей. Для нас ценно, что для создания своих проектов вы выбираете нас. Мы не можем вас подвести. Мы одна команда! Команда единомышленников, которые нацелены на качественный результат."}
            />
            <OurTeam>
                {team}
            </OurTeam>
        </section>
    );
};
