import {useTranslation} from "react-i18next";
import {footerItems} from "@src/shared/components/footer/constants/constants";
import classes from "@src/shared/components/footer/style/footer.module.scss";
import {TextModule} from "@src/shared/scss";
import LogoBig from "@assets/icons/logo/LogoBig.svg";
import {FooterAgreements} from "@src/shared/components/footer/widgets/FooterAgreements";
import {FooterNav} from "@src/shared/components/footer/widgets/FooterNav";
import {FooterLink} from "@src/shared/components/footer/ui/FooterLink";

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
                                {footerItems.right.socialMedia.map((el) => <a href={el.to} target={'_blank'} key={el.to}>
                                    <el.socialMediaSvg/>
                                </a>)}
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