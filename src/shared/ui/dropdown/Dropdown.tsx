import {FC} from "react";
import {DropDownLinkStyle, DropdownStyle, TextModule} from "@src/shared/scss"
import {DropDownLink} from "@src/shared/ui/link";
import {ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {useClass} from "@src/shared/hooks";

export interface DropdownDownProps {
    className?: string
    children?: ReactNode,
    links?: {path: string, title: string}[]
}


export const Dropdown: FC<DropdownDownProps> = ({children, links, className}) => {
    const { t } = useTranslation('main')

    return (
            <nav className={useClass([className, DropdownStyle.dropdown])}>
                {
                    links?.map((item) =>
                      item.path != '' ?
                        <DropDownLink to={item.path} key={item.title}>{t(item.title)}</DropDownLink>
                        :
                        <p key={item.title} className={useClass([DropDownLinkStyle.linkItem, TextModule.paragraph])}>{t(item.title)}</p>
                    )
                }
                {children}
            </nav>
    );
};
