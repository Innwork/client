import {
    ChangeEvent,
    HTMLInputTypeAttribute, MouseEventHandler,
} from "react";
import {Ivalidators} from "@src/shared/hooks/use-input/useInputType";


export interface InputType{
    type?: HTMLInputTypeAttribute;
    autoComplete?: string | undefined
    placeholder?:  string | undefined;
    value?: string | number | readonly string[]
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IMainBaseInput {
    input: Input
    validators: Ivalidators
}

export interface IMainCalendarInput {
    input: CalendarInput
    validators: Ivalidators
}

export interface Input extends InputType{
    tag?: string
    svgPath?:string
    width?:string
    errText?: string
    successText?: string
    label?: string
}


export interface CalendarInput extends InputType{
    tag?: string
    svgPath?:string
    width?:string
    errText?: string
    successText?: string
    label?: string
    onClick?: MouseEventHandler<HTMLInputElement>
    isCalendarOpen?: boolean
    setIsCalendarOpen?: (i: boolean) => void
    position?: 'left' | 'right'
}