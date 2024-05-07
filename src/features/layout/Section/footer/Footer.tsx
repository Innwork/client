import {useTranslation} from "react-i18next";
import {footerItems} from "@src/features/layout/Section/footer/constants/constants";
import classes from "@src/features/layout/Section/footer/style/footer.module.scss";
import {TextModule} from "@src/shared/scss";
import LogoBig from "@assets/icons/logo/LogoBig.svg";
import {FooterAgreements} from "@src/features/layout/Section/footer/widgets/FooterAgreements";
import {FooterNav} from "@src/features/layout/Section/footer/widgets/FooterNav";
import {Link} from "react-router-dom";
import {FooterLink} from "@src/features/layout/Section/footer/ui/FooterLink";

export const Footer = () => {
    const {t} = useTranslation('main');
    return (
        <footer className={classes.footer_container}>
            <div className={classes.footer_wrapper}>
                <div className={classes.footer__grid_container}>

                    <div className={classes.footer__logo_context}>
                        <LogoBig/>

                        <p className={TextModule.paragraph_white_light}>
                            {t(footerItems.left.text)}
                        </p>
                    </div>

                    <FooterNav navName={t(footerItems.center.title)}>
                        {footerItems.center.items.map((el) => <FooterLink to={el.to} key={el.to}>
                            {t(el.text)}
                        </FooterLink>)}
                    </FooterNav>


                    <FooterNav navName={t(footerItems.right.title)}>
                        {[
                            footerItems.right.items.map(
                                (el) => <p className={TextModule.paragraph_white_light} key={el.text}>
                                    {t(el.text)}
                                </p>
                            ),

                            <div className={classes.footer_social_link} key={'social_links'}>
                                {footerItems.right.socialMedia.map((el) => <Link to={el.to} key={el.to}>
                                    <el.socialMediaSvg/>
                                </Link>)}
                            </div>
                        ]}
                    </FooterNav>

                </div>
            </div>

            <FooterAgreements orgName='ⓒ innwork'>
                {footerItems.agreements}
            </FooterAgreements>
        </footer>
    );
};