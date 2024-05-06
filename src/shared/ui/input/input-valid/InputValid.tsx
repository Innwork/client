import {FC, ReactNode} from "react";
import {Ivalidators, useClass} from "@src/shared/hooks";
import {TextModule} from "@src/shared/scss";
import classes from "@src/shared/ui/input/input-valid/InputValid.module.scss";
import ErrorIconMsg from "@assets/icons/ui/errorIcon.svg";
import SuccessIconMsg from "@assets/icons/ui/successmsg.svg";
import {CSSTransition} from "react-transition-group";

export interface IInputValid{
    children: ReactNode,
    validators: Ivalidators
    label?: string
    errText?: string
    successText?: string
}

export const InputValid:FC<IInputValid> = (props) => {
    const {
        children,
        errText,
        successText,
        label,
        validators: {isDirty, isValid}
    } = props;

    return (
        <div className={classes.container}>
            <label className={TextModule.span}>
                {label}
            </label>

            {children}

            <CSSTransition
                classNames={{
                    enter: classes.alert_enter,
                    enterActive: classes.alert_enter__active,
                    exit: classes.alert_exit,
                    exitActive: classes.alert_exit__active
                }}
                timeout={300} unmountOnExit
                in={!(!isValid && !isDirty)}
            >
                {
                    (!isValid && isDirty) ? <div className={useClass([classes.msg, classes['error']])}>
                        <ErrorIconMsg/><p className={TextModule.paragraph}>{errText}</p>
                    </div> : <div className={useClass([classes.msg, classes["success"]])}>
                        <SuccessIconMsg/><p className={TextModule.paragraph}>{successText}</p>
                    </div>
                }
            </CSSTransition>
        </div>
    );
};