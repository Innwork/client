import { FC } from "react";
import { TextModule } from "@src/shared/scss";
import { GeneralDeatailType } from "./types/type"
import cls from "./styles/generalDetail.module.scss";

export const GeneralDetail:FC<GeneralDeatailType> = (props) => {
  const {
    price, floor, status, text
  } = props;

  return (
    <section className={cls.general_detail}>
      <h3 className={TextModule.h3}>Общая информация</h3>

      <ul className={cls.general_ul}>
        <li className={TextModule.h6__regular}>{price}</li>
        <li className={TextModule.h6__regular}>{floor}</li>
        <li className={TextModule.h6__regular}>{status ? "Свободно": "Занято"}</li>
      </ul>


      <div className={cls.general_text}>
        <p className={TextModule.paragraph}>
          {text}    
        </p>
      </div>
    </section>
  )
}
