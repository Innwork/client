import {ContainerModule, TextModule} from "@src/shared/scss";
import {useClass} from "@src/shared/hooks";
import classes from "@src/widgets/сalculator/calculator.module.scss";
import {LiText} from "@src/widgets/сalculator/ui/li-text/LiText";
import {LiModel} from "@src/widgets/сalculator/model/LiModel";
import {DropDownSelect} from "@src/shared/ui/input";
import {Workspaces} from "@src/app/redux/Booking/BookingTypes";
import {useContext, useEffect, useState} from "react";
import {regDate} from "@src/shared/constants";
import {getPrice} from "@src/widgets/сalculator/logic/getPrice";
import {useTranslation} from "react-i18next";
import {TimeSelectDropdowns} from "@src/features/time-select";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {useActions} from "@src/app/redux/hooks/useActions";
import {reservAdditionalModel} from "@src/widgets/reservWorkspaces/model/reservAdditionalModal";
import {GlobalContext} from "@src/app/provider";
import {SelectDate} from "@src/features/select-date";

export const Calculator = () => {
    const [activeWorkspace, setActiveWorkspace] = useState(Workspaces.TRAINING_CENTER)
    const [price, setPrice] = useState('0')
    const [startTime, setStartTime] = useState('00:00')
    const [endTime, setEndTime] = useState('01:00')
    const [startDay, setStartDay] = useState('0/0/0')
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    const {globalResize} = useContext(GlobalContext)!;
    const {t} = useTranslation('home')
    const {setPage, setIsOpen, setWorkspace} = useActions()
    useEffect(() => {
        setPrice(getPrice({time: `${startTime} - ${endTime}`, workspaceName: activeWorkspace, duration: `${startDay.replace(/-/g, '/')} - ${startDay.replace(/-/g, '/')}`}).toString())
    }, [activeWorkspace, startDay, startTime, endTime])

    const saveTariffDates = (title: string, startDay: string, startTime: string, endTime: string) => {
        const item = reservAdditionalModel.pagination.find((space) => space.header === title)
        if (item && startDay != '0') {
            setWorkspace({workspaceName: title as Workspaces, time: `${startTime} - ${endTime}`, imagePath: item.src, title: item.title})
            setWorkspace({workspaceName: title as Workspaces, imagePath: item.src, title: item.title, duration: `${startDay.replace(/-/g, '/')} - ${startDay.replace(/-/g, '/')}`})
        }
    }

    const isValid = regDate.test(startDay)
    
    return (
        <section className={useClass([
            ContainerModule.wrapper, classes.calculator_container
        ])}>

            <div className={classes.text_container}>
                <h3 className={TextModule.h3__medium}>{t('Экономичность и прозрачность')}</h3>

                {LiModel.map(el => <LiText
                    svg={el.svg} header={el.header} subtitle={el.subtitle} key={el.header}/>
                )}
            </div>

            <div className={classes.form_container}>
                <div className={classes.form_wrapper}>
                    <h3 className={TextModule.h6__medium}>{t('Рассчитать стоимость')}</h3>

                    <div className={classes.inputs_container}>
                        {globalResize.isScreenEs && <p className={TextModule.paragraph_white_light}>{t('Площадка')}</p>}
                        <DropDownSelect label={globalResize.isScreenEs ? '' : t('Площадка')} data={Object.values(Workspaces)} placeholder={activeWorkspace} state={"white"} setValue={setActiveWorkspace}/>

                        {globalResize.isScreenEs && <p className={TextModule.paragraph_white_light}>{t('Нужная дата')}</p>}
                        <SelectDate isOpenDefault={isCalendarOpen} setIsOpenDefault={setIsCalendarOpen} label={!globalResize.isScreenEs ? 'Нужная дата' : undefined} setValue={setStartDay} variety={'white'}/>

                        {globalResize.isScreenEs && <p className={TextModule.paragraph_white_light}>{t('Время')}</p>}
                        <TimeSelectDropdowns label={!globalResize.isScreenEs} defaultEnd={endTime} arrow={true} setStartTime={setStartTime} setEndTime={setEndTime}/>
                    </div>

                    <div className={classes.priceBlock}>
                        <p className={globalResize.isScreenEs ? TextModule.h1__light_white : TextModule.h3__light_white}>{Number(price).toLocaleString()} AMD</p>
                            <MainBtn state={'orange'} onClick={() => {
                                saveTariffDates(activeWorkspace, startDay, startTime, endTime)
                                setPage(3)
                                setIsOpen(true)
                            }} className={useClass([classes.button, TextModule.paragraph])} disabled={!isValid}>
                                {t("Забронировать")}
                            </MainBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};