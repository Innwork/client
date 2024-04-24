import {FC} from "react";
import {DropDownLinkStyle, DropdownStyle, TextModule} from "@src/shared/scss"
import {DropDownLink} from "@src/shared/ui/link";
import {ReactNode} from "react";
import {combineStyle} from "@src/shared/utils";
import {useTranslation} from "react-i18next";

export interface DropdownDownProps {
    className?: string
    children?: ReactNode,
    links?: {path: string, title: string}[]
}


export const Dropdown: FC<DropdownDownProps> = ({children, links, className}) => {
    const { t } = useTranslation('main')

    return (
            <nav className={combineStyle([className, DropdownStyle.dropdown])}>
                {
                    links?.map((item) =>
                      item.path != '' ?
                        <DropDownLink to={item.path} key={item.title}>{t(item.title)}</DropDownLink>
                        :
                        <p key={item.title} className={combineStyle([DropDownLinkStyle.linkItem, TextModule.paragraph])}>{t(item.title)}</p>
                    )
                }
                {children}
            </nav>
    );
};
