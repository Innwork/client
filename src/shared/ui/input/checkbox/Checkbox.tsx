import React from 'react';
import cls from "@src/shared/ui/input/checkbox/Checkbox.module.scss"
export const Checkbox = ({checkValue, setCheckValue}:{checkValue: boolean, setCheckValue: (i: boolean) => void}) => {
  return (
    <div className={cls.checkContainer} onClick={() => setCheckValue(!checkValue)}>
      <input className={useClass([cls.check, checkValue ? cls.check__checked : ""])} type={'checkBox'} checked={checkValue}/>
      {checkValue && <Mark/>}
    </div>
  );
};

import Mark from "@assets/icons/ui/Mark.svg"
import {useClass} from "@src/shared/hooks";
