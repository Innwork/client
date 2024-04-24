import {ReactNode} from "react";

export interface IBaseBtnType{
    children: ReactNode
    onClick?: () => void | undefined
}