import {ReactNode, FC, Dispatch, SetStateAction} from 'react';
import classes from "@src/shared/ui/cards/small-cards/SmallCard.module.scss";
import {TextModule} from "@src/shared/scss";
import {useClass} from "@src/shared/hooks";
import {useTranslation} from "react-i18next";

export interface ISmallCards{
    icon: ReactNode,
    title: string,
    subtitle: string,
    state?: "dark" | "light"
    onClick?: Dispatch<SetStateAction<unknown>>
}

export const SmallCards:FC<ISmallCards> = (props) => {
    const {
        icon, subtitle, title, state="light", onClick
    } = props;
    const {t} = useTranslation('home')

    return (
        <div onClick={onClick} className={useClass([classes.container, classes[state], (onClick ? classes["clickable"] : "")])}>
            <div className={classes.wrapper}>
                <div className={classes.svg_container}>
                    {icon}
                </div>

                <div className={classes.text_content}>
                    <h6 className={TextModule.h6__medium}>
                        {t(title)}
                    </h6>

                    <p className={TextModule.paragraph}>
                        {t(subtitle)}
                    </p>
                </div>
            </div>
        </div>
    );
};