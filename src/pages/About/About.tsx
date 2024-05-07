import {AboutUs} from "@src/widgets/about-us";
import classes from "@src/pages/Pages.module.scss"
import {Banner} from "@src/widgets/banner";
import {OurMission} from "@src/pages/About/widgets/our-mission/OurMission";
import OurMissionWomen from "@assets/img/About/women.png";
import AboutBanner from "@assets/img/About/about.png";
import {TextModule} from "@src/shared/scss";
import {OurTeam} from "@src/pages/About/widgets/our-team/OurTeam";
import {Team} from "@src/pages/About/model/Team";

export const About = () => {
    return (
        <section className={classes.flex_pages}>
            <Banner src={AboutBanner}>
                <h3 className={TextModule.h1}>О нас</h3>
            </Banner>
            <AboutUs/>
            <OurMission
                img={OurMissionWomen}
                header={"Наша миссия"}
                text={"Наша миссия, каждый день создавать поддерживающее и вдохновляющее пространство для ваших возможностей. Для нас ценно, что для создания своих проектов вы выбираете нас. Мы не можем вас подвести. Мы одна команда! Команда единомышленников, которые нацелены на качественный результат."}
            />
            <OurTeam>
                {Team}
            </OurTeam>
        </section>
    );
};
