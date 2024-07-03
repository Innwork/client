import {Link, useMatch} from "react-router-dom";
import {FC} from "react";
import {ILinkType} from "@src/shared/types";
import {LinkStyle, TextModule} from "@src/shared/scss";
import {useClass} from "@src/shared/hooks";

interface ICNavLink extends ILinkType {
    bgDark?: boolean
    className?: string
    fontStyle?: string
}


export const CNavLink: FC<ICNavLink> = ({children, to, bgDark, className, fontStyle}) => {
    const match = useMatch(to)

    return (
        <Link  to={to} className={
            useClass([className, match ? LinkStyle.link_active : bgDark ? LinkStyle.link_dark : LinkStyle.link])
        }>
            <p className={fontStyle ? TextModule[fontStyle] : TextModule.paragraph}>
                {children}
            </p>
        </Link>
    );
};