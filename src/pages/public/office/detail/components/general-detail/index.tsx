import { FC, useState } from "react";
import { TextModule } from "@src/shared/scss";
import { CentreModal } from "@src/shared/ui/modals";
import { useClass } from "@src/shared/hooks";
import { MainBtn } from "@src/shared/ui/btn/main-btn/MainBtn";
import { GeneralDeatailType } from "./types/type"
import cls from "./styles/generalDetail.module.scss";
import { FormDetail } from "../form-detail";

import Cross from "@assets/icons/WhiteCross.svg"

export const GeneralDetail:FC<GeneralDeatailType> = (props) => {
  const {
    price, floor, status, text
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <section className={cls.general_detail}>
        <h3 className={TextModule.h3}>Общая информация</h3>

        <ul className={cls.general_ul}>
          <li onClick={() => setIsOpen(!isOpen)} className={useClass([TextModule.h6__regular, cls.active_li])}>{price}</li>
          <li className={TextModule.h6__regular}>{floor}</li>
          <li className={TextModule.h6__regular}>{status ? "Свободно": "Занято"}</li>
        </ul>


        <div className={cls.general_text}>
          <p className={TextModule.paragraph}>
            {text}    
          </p>
        </div>
      </section>

      <CentreModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className={cls.close_modal}>
          <MainBtn onClick={() => setIsOpen(!isOpen)}>
            <Cross width={"32px"} height={"32px"}/>
          </MainBtn>

          <button></button>
        </div>
        <FormDetail/>
      </CentreModal>
    </>
  )
}
