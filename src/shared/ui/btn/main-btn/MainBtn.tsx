import {FC} from "react";
import {IMainBtnType} from "@src/shared/ui/btn/main-btn/MainBtnType";
import { useClass } from "@src/shared/hooks";
import classes from "@src/shared/ui/btn/main-btn/mainBtn.module.scss";

export const MainBtn: FC<IMainBtnType> = (props) => {
    const {
        state="orange",
        disabled=false,
        children,
        className,
        onClick
    } = props;

    return (
        <button className={
            useClass([
                className, classes.main_btn, classes[state]
            ])} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
