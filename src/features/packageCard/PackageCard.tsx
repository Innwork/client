import classes from "./PackageCard.module.scss"
import {FC, useEffect, useState} from "react";
import {Tariffs} from "@src/app/redux/Booking/BookingTypes";
import {TextModule} from "@src/shared/scss";
import ArrowDrownSvg from "@assets/icons/arrowDown.svg";
import DataSVG from "@assets/icons/ui/btn/data.svg";
import TrashBinSvg from "@assets/icons/trashBin.svg";
import {useTranslation} from "react-i18next";
import {useActions} from "@src/app/redux/hooks/useActions";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {DropDownSelect} from "@src/shared/ui/input";
import {selectBookingTariffs} from "@src/app/redux/Booking/BookingSlice";
import {DateInputType} from "@src/widgets/reservWorkspaces/ReservAdditional";
import {SelectDate} from "@src/features/select-date";
import {TimeSelectDropdowns} from "@src/features/time-select";
import {useAppSelector} from "@src/app/redux/hooks/redux";
import {useClass} from "@src/shared/hooks";

interface PackageCardProps {
  date?: string
  durations?: Record<string, string>
  variant?: 'selected' | "disabled" | "default"
  title: Tariffs
  price?: string
  info?: string
  oldPrice?: number
  inputs?: DateInputType[]
}

type TClassesVariant = {
  selected: string,
  disabled: string,
  default: string
}


export const PackageCard: FC<PackageCardProps> = (props) => {
  const {
    title,
    price,
    info,
    oldPrice,
    durations,
    date,
    variant = 'default',
    inputs
  } = props;
  const {removeCartTariff, setTariff, removeTariff, setCartTariff, setPWSpeopleCount, setPage} = useActions()
  const [bookingDuration, setBookingDuration] = useState(durations ? durations[Object.keys(durations)[0]] : '0')
  const [peopleCount, setPeopleCount] = useState('6')
  const [startTime, setStartTime] = useState('00:00')
  const [endTime, setEndTime] = useState('00:00')
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const {t} = useTranslation('main')
  const priceWithSpace = price?.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');

  const activeTariffs = useAppSelector(selectBookingTariffs)

  const classesVariant: TClassesVariant = {
    selected: classes["selected"],
    disabled: classes["disabled"],
    default: classes["default"]
  }

  const getEndDay = (days: string) => {
    if (days) {
      const daysArray = days.split("-")
      const startDayArray = inputs[0].input.value.split('-')
      if (daysArray[1] === 'm') {
        const endDate = new Date(Number(startDayArray[0]), Number(startDayArray[1]) + Number(daysArray[0]), Number(startDayArray[2]))
        return `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
      } else {
        const endDate = new Date(Number(startDayArray[0]), Number(startDayArray[1]), Number(startDayArray[2]) + Number(daysArray[0]))
        return `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
      }
    }
  }

  useEffect(() => {
    setIsCalendarOpen(variant === 'selected')
  }, [variant])

  const toggleTariff = (title: Tariffs) => {
    if (activeTariffs === title) {
      removeTariff();
    } else {
      setTariff(title)
    }
  }

  const saveTariffDates = () => {
    const endDay = getEndDay(bookingDuration)
    if (title === Tariffs.PRIVATE_OFFICE) setPWSpeopleCount(Number(peopleCount))

    const durationName = Object.keys(durations).find(key => durations[key] === bookingDuration);
    setCartTariff({
      tariffName: title as Tariffs,
      duration: `${inputs[0].input.value.replace(/-/g, '/')} - ${endDay.replace(/-/g, '/')}`,
      time: title === Tariffs.NON_FIXED_FLEXI_DESK ? `${startTime} - ${endTime} ` : undefined,
      additional: title === Tariffs.PRIVATE_OFFICE ? ` ${t(durationName)} ${peopleCount + ' человек'}` :
        title === Tariffs.FIXED_DESK ? ` ${durationName}` : ''
    })
  }


  return (
    <div className={useClass([classes.cardContainer, classesVariant[variant]])}>
      <div
        className={useClass([classes.card, variant === 'selected' ? (inputs[0].valid ? classes["valid"] : classes["invalid"]) : classes["default"], date ? classes['cart'] : ''])}>
        <div onClick={() => {
          toggleTariff(title)
        }} className={classes.textContainer}>
          {
            date && date.split(' - ')[0] != '0' &&
            <div className={useClass([classes.dates, TextModule.paragraph])}>
              <div className={classes.imgContainer}>
                <DataSVG className={classes.img}/>
              </div>
              <div>
                {date.split(' - ')[0] === date.split(' - ')[1] ?
                    date.split(' - ')[0]
                    :
                    date
                }
              </div>
            </div>
          }
          <div className={useClass([classes.title, TextModule.paragraph__bold])}>{t(title)}</div>

          <div className={classes.priceBlock}>
            <div
              className={useClass([classes.actualPrice, TextModule.h3])}>{t(`${date ? '' : 'от '}` + priceWithSpace?.replace('  ', ' ') + " AMD")}</div>
            {oldPrice && <div className={classes.oldPrice}>{oldPrice}</div>}
          </div>

          {info && <div className={useClass([classes.info, TextModule.span__light])}>{t(info)}</div>}
        </div>

        <div
          className={useClass([classes.additionalItems, variant === 'selected' ? classes['open'] : classes['closed']])}>
          {!date &&
            <div className={classes.inputsContainer}>
              {inputs.map((input, index) =>
                <div className={classes.inputContainer} key={index}>
                  {index != 0 && <ArrowDrownSvg className={classes.arrowDown}/>}
                    <SelectDate label={'Дата'} isOpenDefault={isCalendarOpen} setIsOpenDefault={setIsCalendarOpen} setValue={input.input.setValue} variety={'white'}/>
                </div>
              )
              }
              {durations && !date && Object.keys(durations)[0] != '0' &&
                <>
                  <ArrowDrownSvg className={classes.arrowDown}/>
                  <div className={classes.inputDropdownContainer}>
                    <p className={useClass([TextModule.paragraph])}>{t("Длительность")}</p>
                    <DropDownSelect
                      data={Object.keys(durations)}
                      placeholder={Object.keys(durations)[0]}
                      state={"white"}
                      setValue={e => setBookingDuration(durations[e as keyof typeof durations])}
                    />
                  </div>
                </>
              }

              {title === Tariffs.PRIVATE_OFFICE && !date &&
                <>
                  <ArrowDrownSvg className={classes.arrowDown}/>
                  <div className={classes.inputDropdownContainer}>
                    <p className={useClass([TextModule.paragraph])}>{t("Количество Человек")}</p>
                    <DropDownSelect
                      data={['6', '7', '8', "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
                      placeholder={peopleCount}
                      state={"white"}
                      setValue={e => setPeopleCount(e)}
                    />
                  </div>
                </>
              }
              {title === Tariffs.NON_FIXED_FLEXI_DESK && !date &&
                <>
                  <ArrowDrownSvg className={classes.arrowDown}/>
                  <TimeSelectDropdowns setStartTime={setStartTime} setEndTime={setEndTime}/>
                </>
              }
            </div>
          }

          {durations &&
            <div className={classes.button}>
              <MainBtn disabled={!inputs[0].valid} onClick={() => {
                (inputs[0].valid ? saveTariffDates() : {})
                setPage(3)
              }} className={TextModule.paragraph}>
                {t("Добавить")}
              </MainBtn>
            </div>
          }
        </div>
      </div>
      {!date &&
        <div className={classes.cardIndicator}>
          <div className={classes.indicatorDot}/>
        </div>
      }
      {date && date.split(' - ')[0] != '0' &&
        <div className={classes.deleteButton} onClick={() => removeCartTariff({tariffName: title, duration: date})}>
          <div className={classes.deleteImageContainer}>
            <TrashBinSvg/>
          </div>
        </div>
      }
    </div>
  )
};

