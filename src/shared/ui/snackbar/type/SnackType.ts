import {Dispatch, ReactNode, SetStateAction} from "react";

export type TClassesSnackType = {
    alert: string,
    error: string,
    info: string,
    success: string
}

export interface ISnackType {
    status: "alert" | "error" | "info" | "success";
    children: ReactNode;
    className?: string | undefined;
    active?: boolean
    onclick?: Dispatch<SetStateAction<boolean>>
}