import {FC, useState} from "react";
import {ISnackType, TClassesSnackType} from "@src/shared/ui/snackbar/type/SnackType";
import classes from "@src/shared/ui/snackbar/style/snackBars.module.scss";
import {combineStyle} from "@src/shared/utils";
import {TextModule} from "@src/shared/scss";

export const SnackBar: FC<ISnackType> = (props) => {
    const {
        active=true,
        status = "alert",
        children,
        className
    } = props

    const classesStatus: TClassesSnackType = {
        alert: classes["alert"],
        error: classes["error"],
        info: classes["info"],
        success: classes["success"]
    }

    const [isActive, setIsActive] = useState(active)

    return (
        <>
            { isActive &&
                <div
                    className={combineStyle([
                        classes.snack_container, classesStatus[status], className
                ])}>
                    <p className={combineStyle([
                        TextModule.paragraph__bold
                    ])}>
                        {children}
                    </p>

                    <div onClick={() => setIsActive(!isActive)} className={classes.snack_container__btn_icon}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.59 0L7 5.66904L1.41 0L0 1.42994L5.59 7.09898L0 12.768L1.41 14.198L7 8.52892L12.59 14.198L14 12.768L8.41 7.09898L14 1.42994L12.59 0Z"
                            />
                        </svg>
                    </div>

                </div>
            }
        </>
    );
};
