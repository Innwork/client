import classes from "@src/features/time-select/dropdowns/style/TimeSelectDropdowns.module.scss";
import {combineStyle} from "@src/shared/utils";
import {TextModule} from "@src/shared/scss";
import {DropDownSelect} from "@src/shared/ui/input/";
import {Dispatch, FC, SetStateAction, useContext} from "react";
import {ArrowRight} from "@src/shared/assets/icons";
import {useClass} from "@src/shared/hooks";
import {GlobalContext} from "@src/app/provider";

interface TimeSelectProps {
  setStartTime: Dispatch<SetStateAction<string>>
  setEndTime: Dispatch<SetStateAction<string>>
  label?: boolean
  arrow?: boolean
  defaultStart?: string
  defaultEnd?: string
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
  const {setStartTime, setEndTime, label = true, arrow = false, defaultStart = timeModel[0], defaultEnd = timeModel[0]} = props
  const {globalResize} = useContext(GlobalContext)!;


  return (
    <div className={useClass([classes.dropdownsContainer, arrow ? classes['arrow'] : ''])}>
      <div className={classes.inputDropdownContainer}>
        {label && <label className={combineStyle([TextModule.span])}>Время начала</label>}
        <DropDownSelect
          data={timeModel}
          placeholder={defaultStart}
          state={"white"}
          setValue={setStartTime}
        />
      </div>

      {arrow && globalResize.isScreenLg && <ArrowRight height='30px'/>}

      <div className={classes.inputDropdownContainer}>
        {label && <label className={combineStyle([TextModule.span])}>Время конца</label>}
          <DropDownSelect
            data={timeModel}
            placeholder={defaultEnd}
            state={"white"}
            setValue={setEndTime}
          />
        </div>

    </div>
  );
};