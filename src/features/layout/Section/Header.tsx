import {useCallback, useContext, useEffect, useRef, useState} from 'react'
import HeaderStyle from "./scss/Header.module.scss";
import {combineStyle} from "@src/shared/utils";
import {LogoSmall} from "@src/shared/assets/icons/logo";
import {Link} from "react-router-dom";
import {TextModule} from "@src/shared/scss";
import CopyIcon from "@src/shared/assets/icons/Header/copy.svg"
import {useTranslation} from "react-i18next";
import {Accordion} from "@src/features/accordion";
import { GlobalContext } from "@src/app/provider";
import {MouseModal} from "@src/shared/ui/modals/MouseModal";
import {HeaderNavbar} from "@src/features/headerNavbar";
import {HeaderStateEnum, NavItem} from "@src/shared/types";
import {HeaderAccount} from "@src/features/headerAccount";
import {HeaderStateType} from "@src/shared/types";
import {useActions} from "@src/app/redux/hooks/useActions";

export const Header = () => {
  const {setIsFormSent} = useActions()
  // TODO: сделать получение items в navbar основываясь на paths

  // const accountBurgerItems = {
  //   DropdownLinks: [
  //     {path: '#', title: 'Войти'},
  //     {path: '#', title: 'Регистрация'},
  //   ],
  //   children: <LngSwitcher/>
  // }

  const navItems: NavItem[] = [
    {
      MainLink: {title: "О нас", to: "/about"},
    },
    {
      MainLink: {title: "Контакты"},
      DropdownLinks: [
        {path: '', title: 'Почта'},
        {path: '', title: 'Локация'},
      ]
    },
    {MainLink: {title: "Новости", to: "#"},},
  ]

  const initialHeaderState = {
    isHeaderBig: false,
    isHeaderScrolled: false,
    isAccountBurgerOpen: false,
    isAccountBurgerClicked: false,
    isAccordionOpen: false,
    isNumberCopied: false,
  }

  const [headerState, setHeaderState] = useState<HeaderStateType>(initialHeaderState)
  const {globalResize} = useContext(GlobalContext)!;
  const burgerRef = useRef<HTMLDivElement>(null)
  const {setIsOpen} = useActions()
  const {t} = useTranslation('main');
  const setBookingIsOpen = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  const toggleAccordion = () => {
    setHeaderStateHandler({[HeaderStateEnum.IS_ACCORDION_OPEN]: "toggle"})
  }

  const setHeaderStateHandler = useCallback((items: Record<string, string>) => {
    const newParams: Record<string, boolean> = {} as Record<string, boolean>
    Object.keys(items).map((key: string) => {
      if (items[key as keyof typeof items] === "true") {
        newParams[key as keyof typeof items] = true
      }
      if (items[key as keyof typeof items] === "false") {
        newParams[key as keyof typeof items] = false
      }
      if (items[key as keyof typeof items] === "toggle") {
        newParams[key as keyof typeof items] = !headerState[key as keyof typeof items]
      }
    })
    setHeaderState(p => ({
      ...p,
      ...newParams
    }))
  }, [headerState])

  useEffect(() => {
    if (globalResize.isScreenLg && headerState.isAccountBurgerOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (burgerRef.current && !event.composedPath().includes(burgerRef.current)) {
          setHeaderStateHandler({[HeaderStateEnum.IS_ACCOUNT_BURGER_OPEN]: "false"})
        }
      }
      document.body.addEventListener('click', handleClickOutside)
      return () => document.body.removeEventListener('click', handleClickOutside)
    }
  }, [globalResize.isScreenLg, headerState.isAccountBurgerOpen, setHeaderStateHandler])

  useEffect(() => {
    if (globalResize.isScreenLg) {
      const listenScrollEvent = () => {
        if (window.scrollY < 80) {
          setHeaderStateHandler({[HeaderStateEnum.IS_HEADER_BIG]: "false"})
        } else if (window.scrollY > 80) {
          setHeaderStateHandler({[HeaderStateEnum.IS_HEADER_BIG]: "true", [HeaderStateEnum.IS_HEADER_SCROLLED]: "true"})
        }
      }
      window.addEventListener('scroll', listenScrollEvent);
      return () => window.removeEventListener('scroll', listenScrollEvent);
    }
  }, [globalResize.isScreenLg, setHeaderStateHandler]);

  return (
    <header
      className={headerState.isHeaderBig ? combineStyle([HeaderStyle.HeaderWrapper, HeaderStyle['big']]) : HeaderStyle.HeaderWrapper}>
      <div
        className={
          headerState.isHeaderBig ? combineStyle([HeaderStyle.Header, HeaderStyle['big']])
            :
            (headerState.isHeaderScrolled ? combineStyle([HeaderStyle.Header, HeaderStyle['small']]) : HeaderStyle.Header)}>
        <div className={HeaderStyle.container}>
          <div className={HeaderStyle.leftSectionContainer}>
            <Link to={'/'}  className={HeaderStyle.LogoContainer}>
              <img alt={'LogoImage'} className={HeaderStyle.Logo} src={LogoSmall}/>
            </Link>
            <p className={HeaderStyle.sloganContainer}><span className={combineStyle([HeaderStyle.slogan, TextModule.paragraph__ligth, globalResize.isScreenLg ? "" : (headerState.isAccordionOpen ? '' : HeaderStyle['closed'])])}>Connect and create with us.</span></p>
          </div>
          <HeaderNavbar navItems={navItems}/>
          <HeaderAccount setIsFormSent={setIsFormSent} headerState={headerState} setHeaderStateHandler={setHeaderStateHandler}/>
          {/*<div*/}
          {/*  className={combineStyle([HeaderStyle.burgerDropdownContainer, headerState.isAccountBurgerOpen ? HeaderStyle['open'] : ''])}>*/}
          {/*  <Dropdown className={HeaderStyle.burgerDropdown} links={accountBurgerItems.DropdownLinks}>*/}
          {/*    {accountBurgerItems.children && <LngSwitcher/>}*/}
          {/*  </Dropdown>*/}
          {/*</div>*/}
        </div>
        <Accordion isAccountBurgerClicked={headerState.isAccountBurgerClicked}
                   navItems={[{MainLink: {title: "Взять комнату", action: setBookingIsOpen},},...navItems]} isOpen={headerState.isAccordionOpen} toggleAccordion={toggleAccordion}/>
      </div>
      {globalResize.isScreenLg && <MouseModal icon={<CopyIcon/>} content={t("Вы скопировали") + ": " + '+37433704070'} isOpen={headerState.isNumberCopied}/>}
    </header>
  );
}