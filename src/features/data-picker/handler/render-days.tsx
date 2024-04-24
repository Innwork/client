import {format, startOfWeek, addDays} from "date-fns";
import {TextModule} from "@src/shared/scss";
import classes from "@src/features/data-picker/DataPicker.module.scss";
import {useClass} from "@src/shared/hooks";

export type TRenderDays = {
    currentMonth: Date;
    dateFormat: string;
}

export const renderDays = ({currentMonth, dateFormat}: TRenderDays) => {
    const days = [];
    let startDate = startOfWeek(currentMonth);

    for(let i = 0; i < 7; i++){
        days.push(
            <p className={useClass(
                [TextModule.paragraph__bold, classes.col]
            )} key={i}>
                {format(addDays(startDate, i), dateFormat)}
            </p>
        )
    }

    return <div className={classes.rows_day}>{days}</div>
}