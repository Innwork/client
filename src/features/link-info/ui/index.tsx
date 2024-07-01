import { Link } from "react-router-dom";
import cls from "@src/features/link-info/styles/linkInfo.module.scss";
import { FC } from "react";
import { ILinkInfo } from "../types/linktype";
import { TextModule } from "@src/shared/scss";

export const LinkInfo:FC<ILinkInfo> = (props) => {
  const {
    to,
    title,
    subtitle,
    children
  } = props;

  return (
    <Link to={to} className={cls.container}>
      <div className={cls.wrapper_link}>
        <div className={cls.icon_container}>
          {children}
        </div>

        <div className={cls.text_container}>
          <h4 className={TextModule.h5}>{title}</h4>
          <p className={TextModule.paragraph}>{subtitle}</p>
        </div>
      </div>
    </Link>
  )
}
