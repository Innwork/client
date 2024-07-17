import React, {FC} from 'react';
import {useClass} from "@src/shared/hooks";
import cls from "@src/shared/ui/modals/centre-modal/CentreModal.module.scss"
import {TModal} from "@src/shared/ui/modals/type/modalTypes";

export const CentreModal:FC<TModal> = ({setIsOpen, isOpen, children}) => {
  return (
    <div onClick={() => setIsOpen(false)} className={useClass([cls.container, isOpen ? cls["open"] : cls["closed"]])}>
      <div onClick={(e) => e.stopPropagation()} className={cls.modal}>
        {children}
      </div>
    </div>
  );
};