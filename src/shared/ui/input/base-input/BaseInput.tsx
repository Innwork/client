import {InputType} from "@src/shared/types";
import {FocusEventHandler, MouseEventHandler, FC, useEffect, useState, useRef} from "react";
import classes from "@src/shared/ui/input/base-input/BaseInput.module.scss";
import {useClass} from "@src/shared/hooks";
import {TextModule, WidthModule} from "@src/shared/scss";

export interface IBaseInput extends InputType{
    tag?: string,
    className?: string | undefined
    width?: string;
    isValid?: boolean;
    isDirty?: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>
    onBlur?:FocusEventHandler<HTMLInputElement>
}

export const BaseInput:FC<IBaseInput> = (props) => {
    const {
        tag,
        width,
        type,
        autoComplete,
        placeholder,
        value,
        className,
        isValid,
        isDirty,
        onBlur,
        onChange,
        onClick
    } = props;

    const [statusClassName, setStatusClassName] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!isDirty && !isValid){
            setStatusClassName("");
        } else if (isDirty && !isValid) {
            setStatusClassName(classes["error"])
        } else {
            setStatusClassName(classes["success"]);
        }
    }, [isValid, isDirty]);

    const handleFocus = () => {
        if (inputRef.current && type === "date"){
            inputRef.current.blur()
        }
    }

    return (
        <input
            className={
                useClass([
                    TextModule.paragraph, className, classes.base_input, statusClassName
                ])
            }
            onClick={onClick}
            value={value}
            type={type}
            name={tag}
            autoComplete={autoComplete}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={handleFocus}
        />
    );
};