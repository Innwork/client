import {FC} from "react";
import {ILinkType} from "@src/shared/types";
import {Link} from "react-router-dom";
import {DropDownLinkStyle, TextModule} from "@src/shared/scss"
import {useTranslation} from "react-i18next";
import {useClass} from "@src/shared/hooks";


export const DropDownLink: FC<ILinkType> = ({children, to}) => {
  const {t} = useTranslation('main')
  return (
    <>
      <Link to={to} className={useClass([DropDownLinkStyle.linkItem, TextModule.span])}>
        {children}
        {to === '#' &&
          <div className={useClass([DropDownLinkStyle.errorModal, TextModule.span])}>
            <p>{t("Наше приложение ещё в разработке")}.</p>
            <p>{t("Эта страница пока недоступна")}.</p>
          </div>
        }
      </Link>
    </>


  );
};