import {
    format,
    startOfWeek,
    startOfMonth,
    endOfWeek,
    endOfMonth,
    isSameMonth,
    isBefore,
    addDays,
    isEqual,
    startOfDay
} from "date-fns";
import classes from "@src/features/data-picker/DataPicker.module.scss";
import {useClass} from "@src/shared/hooks";
import {TextModule} from "@src/shared/scss";
import {Dispatch, SetStateAction} from "react";

export type TRenderCells = {
    currentMonth: Date;
    dateFormat: string;
    returnFormat: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>
    setSelectDate: Dispatch<SetStateAction<string>>
    setValue: Dispatch<SetStateAction<string>>
}

export const renderCells = ({currentMonth, dateFormat, returnFormat, setIsOpen, setSelectDate, setValue}: TRenderCells) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    const todayStart = startOfDay(new Date())

    let days = [];
    let day = startDate;
    let formattedDate = "";

    const onSelectDate = (date: Date) => {
        setSelectDate(format(date, returnFormat));
        setValue(format(date, returnFormat))
        setIsOpen(false);
    }

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            const handleClick = !isSameMonth(day, currentMonth) || isBefore(day, todayStart) ? undefined : () => onSelectDate(cloneDay);

            days.push(
                <div
                    className={classes.col} key={day.toString()}
                    onClick={handleClick}
                >
                    <p className={useClass([
                        classes.cell,
                        TextModule.paragraph,
                        isEqual(day, todayStart) ? classes["today"] : "",
                        (!isSameMonth(day, currentMonth) || isBefore(day, todayStart)) ? classes["disabled"] : ""
                    ])}>{formattedDate}</p>
                </div>
            );
            day = addDays(day, 1);
        }

        rows.push(
            <div className={classes.rows_day}>
                {days}
            </div>
        )

        days = [];
    }

    return <div>{rows}</div>
}