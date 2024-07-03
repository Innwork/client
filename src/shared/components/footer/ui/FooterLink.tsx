import {FC} from "react";
import {ILinkType} from "@src/shared/types";
import {Link} from "react-router-dom";
import {TextModule} from "@src/shared/scss";
import classes from "@src/shared/components/footer/style/FooterLink.module.scss";
import {useClass} from "@src/shared/hooks";


export const FooterLink:FC<ILinkType> = (props) => {
    const {
        children, className, to
    } = props;

    return (
        <Link to={to} className={useClass([
            className, TextModule.paragraph_white_light, classes.footer_link
        ])}>
            {children}
        </Link>
    );
};
