import {FC} from "react";
import {ILinkType} from "@src/shared/types";
import {Link} from "react-router-dom";
import {combineStyle} from "@src/shared/utils";
import {TextModule} from "@src/shared/scss";
import classes from "@src/features/layout/Section/footer/style/FooterLink.module.scss";


export const FooterLink:FC<ILinkType> = (props) => {
    const {
        children, className, to
    } = props;

    return (
        <Link to={to} className={combineStyle([
            className, TextModule.paragraph_white_light, classes.footer_link
        ])}>
            {children}
        </Link>
    );
};
