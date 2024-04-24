import {IBaseBtnType} from "@src/shared/types";

export interface IMainBtnType extends IBaseBtnType{
    state?: "orange" | "black" | "blue" | "white"
    className?: string | undefined
    disabled?: boolean | undefined
}