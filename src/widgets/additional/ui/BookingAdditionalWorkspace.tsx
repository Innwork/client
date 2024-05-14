import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {TextModule} from "@src/shared/scss";
import classes from "@src/widgets/additional/style/BookingAdditionalPagination.module.scss"
import {combineStyle} from "@src/shared/utils";
import {Workspaces} from "@src/app/redux/Booking/BookingTypes";
import {TimeSelectDropdowns} from "@src/features/time-select";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {useTranslation} from "react-i18next";
import ArrowDrownSvg from "@assets/icons/arrowDown.svg";
import {useActions} from "@src/app/redux/hooks/useActions";
import {SelectDate} from "@src/features/select-date";
import {DateInputType} from "@src/widgets/reservWorkspaces/widgets/reserv-additional/ReservAdditional";
import {useClass} from "@src/shared/hooks";

type IWorkspaces = {
    activeWorkspace: Workspaces | '',
    setActiveWorkspace: Dispatch<SetStateAction<Workspaces | ''>>
}

export interface IAdditionalPaginationItems {
    tag: Workspaces
    src: string,
    header: string,
    title: string,
    price: string,
    workSpaces: IWorkspaces,
    inputs: DateInputType[]
    saveWorkspace: (title: string, startDay: string, startTime: string, endTime: string) => void
}

export const BookingWorkspaceItems: FC<IAdditionalPaginationItems> = (props) => {
    const [startTime, setStartTime] = useState('00:00')
    const [endTime, setEndTime] = useState('00:00')
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const {src, header, title, price, workSpaces, tag, inputs, saveWorkspace} = props;
    const {t} = useTranslation('main')
    const {setPage} = useActions()

    const toggleWorkspace = (tag : Workspaces) => {
        if(workSpaces.activeWorkspace === tag) {
            workSpaces.setActiveWorkspace('')
        } else if(tag != Workspaces.TRAINING_CENTER){
            workSpaces.setActiveWorkspace(tag)
        }
    }


    useEffect(() => {
        setIsCalendarOpen(workSpaces.activeWorkspace === tag)
    }, [workSpaces.activeWorkspace])


    const isValid = !(inputs.map(input => input.valid).includes(false))

    return (
        <div
            className={workSpaces.activeWorkspace === tag ? combineStyle([classes.workspaceContainer_active, isValid ? '' : classes['invalid']]) : (tag === Workspaces.TRAINING_CENTER ? classes.workspaceContainer_disabled : classes.workspaceContainer)}>
            {tag === Workspaces.TRAINING_CENTER &&
              <>
                  <div className={classes.soonButtonContainer}/>
                  <MainBtn className={useClass([classes.soonButton, TextModule.paragraph_white])}>{t("Совсем скоро")}</MainBtn>
              </>

            }

            <div
                onClick={() => toggleWorkspace(tag)}
                className={useClass([workSpaces.activeWorkspace === tag ? classes.baseCardContainer_active : (tag === Workspaces.TRAINING_CENTER ? classes.baseCardContainer_disabled : classes.baseCardContainer)])}>
                <div className={classes.image}>
                    <img src={src} alt={header}/>
                </div>

                <div className={classes.text_content}>
                    <h4 className={TextModule.paragraph__bold}>
                        {header}
                    </h4>

                    <span className={combineStyle([
                        TextModule.h6, classes.text_content__span
                    ])}>
                        {price}
                    </span>

                    <p className={TextModule.paragraph}>
                        {title}
                    </p>
                </div>
            </div>

            <div
                className={combineStyle([classes.additionalItemsContainer, workSpaces.activeWorkspace === tag ? classes['open'] : classes['closed']])}>
                <div className={classes.inputsContainer}>
                    {inputs.map((input, index) =>
                        <SelectDate key={index} label={'Дата'} isOpenDefault={isCalendarOpen} setIsOpenDefault={setIsCalendarOpen} setValue={input.input.setValue} variety={'white'}/>
                    )}
                    <ArrowDrownSvg className={classes.arrowDown}/>
                    <TimeSelectDropdowns setStartTime={setStartTime} setEndTime={setEndTime}/>
                </div>
                <div className={classes.send}>
                    <MainBtn state={'blue'} onClick={() => {
                        saveWorkspace(tag, inputs[0].input.value, startTime, endTime)
                        setPage(3)
                    }} className={TextModule.paragraph} disabled={!isValid}>
                        {t("Добавить")}
                    </MainBtn>
                </div>
            </div>
        </div>
    );
};
