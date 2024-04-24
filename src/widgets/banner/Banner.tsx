import {FC, ReactNode} from "react";
import classes from "@src/widgets/banner/banner.module.scss";

export interface IBanner {
    src: string
    children: ReactNode
}

export const Banner:FC<IBanner> = ({children, src}) => {
    return (
        <div className={classes.banner_container}>
            <div className={classes.banner_content}>{children}</div>
            <div className={classes.banner_gradient}></div>
            <img className={classes.banner_img} src={src} alt={src}/>
        </div>
    );
};
