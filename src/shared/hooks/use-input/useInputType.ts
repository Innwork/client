import {ChangeEvent, FocusEventHandler} from "react";

export interface Ivalidators{
    value: string
    isValid:boolean
    isDirty:boolean
    isEmpty:boolean
    regExpError:boolean
    setValue: (i: string) => void
    onChange?:(e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>
}