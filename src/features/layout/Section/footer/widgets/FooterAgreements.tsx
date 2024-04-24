import {FC} from "react";
import {FooterLink} from "@src/features/layout/Section/footer/ui/FooterLink";
import classes from "@src/features/layout/Section/footer/style/Agreements.module.scss";
import {TextModule} from "@src/shared/scss";
import {useTranslation} from "react-i18next";

type childrenAgreements = {
    to: string;
    text: string;
}

interface IFooterAgreements {
    children: Array<childrenAgreements>;
    orgName: string
}

export const FooterAgreements:FC<IFooterAgreements> = (props) => {
    const {
        children, orgName
    } = props;
    const {i18n, t} = useTranslation('main')

    return (
        <div className={classes.agreement}>
            <div className={classes.agreement__wrapper}>
                <div className={classes.agreement__links}>
                    {
                        children.map(
                            (el, index) => <FooterLink to={el.to + `lng=${i18n.language}`} key={index}>
                                {t(el.text)}
                            </FooterLink>
                        )
                    }
                </div>

                <p className={TextModule.paragraph_white_light}>
                    {t(orgName)}
                </p>
            </div>
        </div>
    );
};
