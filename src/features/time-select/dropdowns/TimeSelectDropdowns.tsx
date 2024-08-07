import classes from "@src/features/time-select/dropdowns/style/TimeSelectDropdowns.module.scss";
import {TextModule} from "@src/shared/scss";
import {DropDownSelect} from "@src/shared/ui/input/";
import {Dispatch, FC, SetStateAction, useContext, useEffect} from "react";
import ArrowRight from "@assets/icons/ArrowRight.svg";
import {useClass} from "@src/shared/hooks";
import {GlobalContext} from "@src/app/provider";
import {useTranslation} from "react-i18next";

interface TimeSelectProps {
  setStartTime: Dispatch<SetStateAction<string>>
  setEndTime: Dispatch<SetStateAction<string>>
  label?: boolean
  arrow?: boolean
  defaultStart?: string
  defaultEnd?: string
  maxStart?: number
  maxEnd?: number
}

const timeModel = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
]

export const TimeSelectDropdowns: FC<TimeSelectProps> = (props) => {
  const {setStartTime, setEndTime, label = true, arrow = false, maxStart = 0, maxEnd = 24, defaultStart = timeModel[0], defaultEnd = timeModel[0]} = props
  const allowedTime = timeModel.slice(Number(maxStart), Number(maxEnd))
  const {globalResize} = useContext(GlobalContext)!;
  const {t} = useTranslation('main')

  useEffect(() => {
    setStartTime(allowedTime[0])
    setEndTime(allowedTime[1])
  }, [])

  return (
    <div className={useClass([classes.dropdownsContainer, arrow ? classes['arrow'] : ''])}>
      <div className={classes.inputDropdownContainer}>
        {label && <label className={useClass([TextModule.span])}>{t("Время начала")}</label>}
        <DropDownSelect
          data={allowedTime}
          placeholder={defaultStart}
          state={"white"}
          setValue={setStartTime}
          i18={false}
        />
      </div>

      {arrow && globalResize.isScreenLg && <ArrowRight height='30px'/>}

      <div className={classes.inputDropdownContainer}>
        {label && <label className={useClass([TextModule.span])}>{t("Время конца")}</label>}
          <DropDownSelect
            data={allowedTime}
            placeholder={defaultEnd}
            state={"white"}
            setValue={setEndTime}
            i18={false}
          />
        </div>

    </div>
  );
};