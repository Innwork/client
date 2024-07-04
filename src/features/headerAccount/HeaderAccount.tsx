import {Link} from "react-router-dom";
import {TextModule} from "@src/shared/scss";
import BurgerMenu from "@assets/icons/Header/burger-menu.svg";
import CrossIcon from "@assets/icons/Header/cross.svg";
import PhoneIcon from "@assets/icons/Header/phone.svg";
import {useTranslation} from "react-i18next";
import {FC, useContext, useEffect, useState} from "react";
import GbFlag from "@assets/icons/Flags/GbFlag.png"
import HyFlag from "@assets/icons/Flags/HyFlag.png"
import RuFlag from "@assets/icons/Flags/RuFlag.png"
import {GlobalContext} from "@src/app/provider";
import {HeaderStateEnum, HeaderStateType} from "@src/shared/types";
import HeaderAccountStyle from "./HeaderAccount.module.scss"
import {useActions} from "@src/app/redux/hooks/useActions";
import {DropDownSelect} from "@src/shared/ui/input";
import {useClass} from "@src/shared/hooks";

interface HeaderAccountProps {
  headerState: HeaderStateType
  setHeaderStateHandler: (value: Record<string, string>) => void
}

const flags = [{flagSvg: GbFlag, shortName: 'en-US'}, {flagSvg: HyFlag, shortName: 'hy-AM'}, {flagSvg: RuFlag, shortName: 'ru-RU'}]

export const HeaderAccount:FC<HeaderAccountProps> = ({headerState, setHeaderStateHandler}) => {
  const {t, i18n } = useTranslation('main')
  const [language, setLanguage] = useState(i18n.language)
  const {globalResize} = useContext(GlobalContext)!
  const {setIsOpen} = useActions()

  const HandleCopyNumber = () => {
    navigator.clipboard.writeText("+37433704070").then()
    setHeaderStateHandler({[HeaderStateEnum.IS_NUMBER_COPIED]: "true"})
    setTimeout(() => {
      setHeaderStateHandler({[HeaderStateEnum.IS_NUMBER_COPIED]: "false"})
    }, 700)
  }

  useEffect(() => {
    const lng = flags.find(el => el.flagSvg === language)
    if (lng) i18n.changeLanguage(lng.shortName).then()
  }, [i18n, language])

  const activeLanguage = flags.find((flag) => flag.shortName === language)

  return (
    <div className={HeaderAccountStyle.rightHeaderSection}>
      <Link className={useClass([TextModule.paragraph, HeaderAccountStyle.callUsButton])} onClick={globalResize.isScreenLg ? HandleCopyNumber : () => {}}
            to={globalResize.isScreenLg ? "#" : "tel:+37433704070"}>
        <PhoneIcon/>
      </Link>
      <div className={HeaderAccountStyle.bigBurgerSvgContainer}
           onClick={() => {
             setHeaderStateHandler({[HeaderStateEnum.IS_ACCOUNT_BURGER_CLICKED]: "true",  [HeaderStateEnum.IS_ACCORDION_OPEN]: "toggle"})
           }}>
        {headerState.isAccordionOpen ? <CrossIcon className={HeaderAccountStyle.bigBurgerSvg}/>
          :
          <BurgerMenu className={HeaderAccountStyle.bigBurgerSvg}/>
        }
      </div>
      <button onClick={() => setIsOpen(true)}
              className={useClass([HeaderAccountStyle.bookingButton, TextModule.paragraph])}>
        <span>{t('Взять комнату')}</span>
      </button>

      {/*<div className={HeaderAccountStyle.menuSection}>*/}
        {/*<div ref={ref} className={HeaderAccountStyle.burgerContainer}*/}
        {/*     onClick={() => setHeaderStateHandler({[HeaderStateEnum.IS_ACCOUNT_BURGER_OPEN]: "toggle"})}>*/}
        {/*  <img alt={'BurgerMenuSvg'} src={BurgerMenu} className={HeaderAccountStyle.burgerSvg}/>*/}
        {/*</div>*/}
        {/*<div className={HeaderAccountStyle.accountWrapper}>*/}
        {/*  <Link to={'#'} className={HeaderAccountStyle.accountContainer}>*/}
        {/*    <img alt={'AccountSvg'} src={Account}*/}
        {/*         className={HeaderAccountStyle.accountSvg}/>*/}
        {/*    <div className={combineStyle([HeaderAccountStyle.errorModal, TextModule.span])}>*/}
        {/*      <p>{t("Наше приложение ещё в разработке")}.</p>*/}
        {/*      <p>{t("Эта страница пока недоступна")}.</p>*/}
        {/*    </div>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      {/*</div>*/}
      <div className={HeaderAccountStyle.languageDropdown}>
        <DropDownSelect
          data={flags.map(el => el.flagSvg)}
          placeholder={activeLanguage ? activeLanguage.flagSvg : flags[0].flagSvg}
          state={"white"}
          setValue={e => setLanguage(e)}
          icon
        />
      </div>
    </div>
  );
};
