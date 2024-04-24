import {FC} from "react";
import {ILinkType} from "@src/shared/types";
import {Link} from "react-router-dom";
import {DropDownLinkStyle, TextModule} from "@src/shared/scss"
import {combineStyle} from "@src/shared/utils";
import {useTranslation} from "react-i18next";


export const DropDownLink: FC<ILinkType> = ({children, to}) => {
  const {t} = useTranslation('main')
  return (
    <>
      <Link to={to} className={combineStyle([DropDownLinkStyle.linkItem, TextModule.span])}>
        {children}
        {to === '#' &&
          <div className={combineStyle([DropDownLinkStyle.errorModal, TextModule.span])}>
            <p>{t("Наше приложение ещё в разработке")}.</p>
            <p>{t("Эта страница пока недоступна")}.</p>
          </div>
        }
      </Link>
    </>


  );
};