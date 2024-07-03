import {FC} from "react";
import {NotImgType} from "@src/shared/components/not-img/types/NotImgType";
import cls from "@src/shared/components/not-img/styles/notImg.module.scss";

export const NotImg:FC<NotImgType> = ({children}) => {
  return (
    <div className={cls.container}>
      {children}
    </div>
  );
};