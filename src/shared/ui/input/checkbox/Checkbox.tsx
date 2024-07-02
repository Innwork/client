import React, {FC} from 'react';
import cls from "@src/shared/ui/input/checkbox/Checkbox.module.scss"

interface CheckboxProps {
  checkValue: boolean,
  setCheckValue: (i: boolean) => void,
  variety?: "green" | "orange"
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {checkValue, setCheckValue, variety = "orange"} = props

  return (
    <div className={cls.checkContainer} onClick={() => setCheckValue(!checkValue)}>
      <input className={useClass([cls.check, cls[variety], checkValue ? cls[`${variety}__checked`] : ""])} type={'checkBox'}
             checked={checkValue}/>
      {checkValue && <Mark/>}
    </div>
  );
};

import Mark from "@assets/icons/ui/Mark.svg"
import {useClass} from "@src/shared/hooks";
