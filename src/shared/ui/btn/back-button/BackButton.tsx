import {IBaseBtnType} from "@src/shared/types";
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {TextModule} from "@src/shared/scss";
import ButtonStyle from "@src/shared/ui/btn/back-button/BackButton.module.scss"

export const BackButton:FC<IBaseBtnType> = ({children}) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={ButtonStyle.back_button}>
      <p className={TextModule.paragraph}>
        {children}
      </p>
    </button>
  );
};