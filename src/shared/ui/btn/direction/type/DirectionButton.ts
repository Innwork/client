import {MouseEvent, ReactNode} from "react";

export type TClassesDirectionButtonType = {
    back: string,
    next: string
}

export interface IDirectionButtonType {
    variant: "back" | "next" ;
    children: ReactNode;
    className?: string | undefined;
    active?: boolean;
    disabled?: boolean;
    onClick?: (e?: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}