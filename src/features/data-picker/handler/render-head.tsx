import {format} from "date-fns";
import classes from "@src/features/data-picker/DataPicker.module.scss";
import {TextModule} from "@src/shared/scss";
import {useClass} from "@src/shared/hooks";

export type TRenderHead = {
    variety: "white" | "black" | "blue"
    currentMonth: Date;
    dateFormat: string;
    prevMonth: () => void;
    nextMonth: () => void;
}

export const renderHead = ({currentMonth, dateFormat, prevMonth, nextMonth, variety}: TRenderHead) => {
    return (
        <div className={classes.head_calendar}>
            <button onClick={prevMonth} className={useClass([classes.btn_prev, classes[variety]])}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                     viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>

            <div className={classes.text_head}>
                <span className={TextModule.paragraph}>{format(currentMonth, dateFormat)}</span>
            </div>

            <button onClick={nextMonth} className={useClass([classes.btn_next, classes[variety]])}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                     viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
        </div>
    )
}