import classes from "@src/features/select-date/selectDate.module.scss";
import {TextModule} from "@src/shared/scss";
import {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {DataPicker} from "@src/features/data-picker";
import Date from "@src/shared/assets/icons/ui/btn/grayData.svg"
import {useClass} from "@src/shared/hooks";

export interface ISelectDate {
    placeholder?: string;
    setValue: Dispatch<SetStateAction<string>>
    variety?: 'white' | 'black'
    label?: string
    isOpenDefault?: boolean
    setIsOpenDefault?: (i: boolean) => void
}

export const SelectDate: FC<ISelectDate> = (props) => {
    const {placeholder, setValue, variety= 'black', label, isOpenDefault, setIsOpenDefault} = props
    const calendarRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectDate, setSelectDate] = useState<string>(placeholder);

    const varietyStyle = {
      'white': classes['white'],
      'black': classes["black"]
    }

    useEffect(() => {
      if (!isOpenDefault) setIsOpen(isOpenDefault)
    }, [isOpenDefault])

    const handlerBtnClick = () => {
        setIsOpen(!isOpen);
        if (setIsOpenDefault) setIsOpenDefault(!isOpen);
    }

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (calendarRef.current && (!event.composedPath().includes(calendarRef.current))) {
          setIsOpen(false)
        }
      }
      document.body.addEventListener('click', handleClickOutside)
      return () => document.body.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <div ref={calendarRef} className={classes.container_date}>
            {label && <label className={TextModule.span}>{label}</label>}
            <button  className={useClass([classes.btn_date, varietyStyle[variety]])} onClick={handlerBtnClick}>
                <span
                    className={useClass([TextModule.paragraph, placeholder === selectDate ? classes.placeholder : ""])}>
                    {selectDate}
                </span>
                <Date/>
            </button>


            <CSSTransition
                classNames={{
                    enter: classes.__enter,
                    enterActive: classes.__enter_active,
                    exit: classes.__exit,
                    exitActive: classes.__exit_active
                }}
                in={isOpen} unmountOnExit timeout={300}
            >
                <div className={classes.date_picker}>
                    <DataPicker setValue={setValue} setIsOpen={setIsOpen} setSelectDate={setSelectDate}/>
                </div>
            </CSSTransition>
        </div>
    );
};
