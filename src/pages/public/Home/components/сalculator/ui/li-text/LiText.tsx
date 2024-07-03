import {FC, ReactNode} from "react";
import classes from "@src/pages/public/Home/components/сalculator/ui/li-text/liText.module.scss";
import {TextModule} from "@src/shared/scss";

export interface ILiText{
    svg: ReactNode
    header: string,
    subtitle: string
}

export const LiText:FC<ILiText> = (props) => {
    const {
        svg, header, subtitle
    } = props;

    return (
        <div className={classes.li_container}>
            <div className={classes.svg_container}>
                {svg}
            </div>

            <div className={classes.li_text}>
                <h6 className={TextModule.h6__medium}>
                    {header}
                </h6>

                <p className={TextModule.paragraph}>
                    {subtitle}
                </p>
            </div>
        </div>
    );
};