import { Link } from "react-router-dom";
import cls from "@src/features/link-info/styles/linkInfo.module.scss";
import { FC } from "react";
import { ILinkInfo } from "../types/linktype";
import { TextModule } from "@src/shared/scss";
import {useTranslation} from "react-i18next";

export const LinkInfo:FC<ILinkInfo> = (props) => {
  const {
    to,
    title,
    subtitle,
    children
  } = props;
  const {t} = useTranslation("info")

  function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  }


  return (
    <Link to={to} className={cls.container}>
      <div className={cls.wrapper_link}>
        <div className={cls.icon_container}>
          {children}
        </div>

        <div className={cls.text_container}>
          <h4 className={TextModule.h5}>{t(title)}</h4>
          <p className={TextModule.paragraph}>{truncateString(t(subtitle), 70)}</p>
        </div>
      </div>
    </Link>
  )
}
