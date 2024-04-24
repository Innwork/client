import {Dispatch, FC, SetStateAction, useState} from "react";
import {renderHead} from "@src/features/data-picker/handler/render-head";
import {addMonths, subMonths,} from 'date-fns';
import classes from "@src/features/data-picker/DataPicker.module.scss";
import {renderDays} from "@src/features/data-picker/handler/render-days";
import {renderCells} from "@src/features/data-picker/handler/render-cells";

export interface IDataPicker {
    format?: string
    setIsOpen: Dispatch<SetStateAction<boolean>>
    setSelectDate: Dispatch<SetStateAction<string>>
    setValue: Dispatch<SetStateAction<string>>
}

export const DataPicker: FC<IDataPicker> = (props) => {
    const {
        format="yyyy-MM-dd",
        setIsOpen,
        setSelectDate,
        setValue
    } = props;

    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    return (
        <div className={classes.calendar}>
            {renderHead({
                currentMonth: currentMonth,
                dateFormat: "MMMM yyyy",
                nextMonth: nextMonth,
                prevMonth: prevMonth
            })}

            {renderDays({
                currentMonth: currentMonth, dateFormat: "iii"
            })}

            {renderCells({
                currentMonth: currentMonth,
                dateFormat: "d",
                returnFormat: format,
                setIsOpen: setIsOpen,
                setSelectDate: setSelectDate,
                setValue: setValue
            })}
        </div>
    );
};

