import {Dispatch, FC, SetStateAction, useState} from "react";
import {renderHead} from "@src/features/data-picker/handler/render-head";
import {addMonths, subMonths,} from 'date-fns';
import classes from "@src/features/data-picker/DataPicker.module.scss";
import {renderDays} from "@src/features/data-picker/handler/render-days";
import {renderCells} from "@src/features/data-picker/handler/render-cells";
import {useClass} from "@src/shared/hooks";

export interface IDataPicker {
    variety?: "white" | "black" | "blue"
    format?: string
    setIsOpen: Dispatch<SetStateAction<boolean>>
    setSelectDate: Dispatch<SetStateAction<string>>
    setValue: Dispatch<SetStateAction<string>>
}

export const DataPicker: FC<IDataPicker> = (props) => {
    const {
        variety = "black",
        format="yyyy-M-d",
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
        <div className={useClass([classes.calendar, classes[variety]])}>
            {renderHead({
                variety: variety,
                currentMonth: currentMonth,
                dateFormat: "MMMM yyyy",
                nextMonth: nextMonth,
                prevMonth: prevMonth
            })}

            {renderDays({
                currentMonth: currentMonth, dateFormat: "iii"
            })}

            {renderCells({
                variety: variety,
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

