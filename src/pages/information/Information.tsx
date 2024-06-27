import React from 'react';
import {ContainerModule} from "@src/shared/scss";
import {useClass} from "@src/shared/hooks";
import cls from "@src/pages/information/Information.module.scss"
import {CNavLink} from "@src/shared/ui/link";

export const Information = () => {
  return (
    <div className={useClass([ContainerModule.wrapper, cls.linksContainer])}>
      <CNavLink to={"/copyright"}>For copyright holders</CNavLink>
      <CNavLink to={"/privacy"}>Privacy policy</CNavLink>
      <CNavLink to={"/rules"}>Rules for using</CNavLink>
      <CNavLink to={"/terms"}>Terms of use</CNavLink>
    </div>
  );
};