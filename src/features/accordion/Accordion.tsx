import {FC, ReactNode, useContext, useEffect, useRef, useState} from "react";
import AccordionStyle from "./Accordion.module.scss"
import {Link} from "react-router-dom";
import {AccordionItem} from "@src/features/accordion/AccordionItem";
import {TextModule} from "@src/shared/scss";
import {useTranslation} from "react-i18next";
import {GlobalContext} from "@src/app/provider";
import {NavItem} from "@src/shared/types";
import {DropDownSelect} from "@src/shared/ui/input";
import GbFlag from "@assets/icons/Flags/GbFlag.png";
import HyFlag from "@assets/icons/Flags/HyFlag.png";
import RuFlag from "@assets/icons/Flags/RuFlag.png";
import {useClass} from "@src/shared/hooks";

interface accountBurgerType {
  DropdownLinks: { path: string, title: string }[]
  children: ReactNode
}

interface AccordionProps {
  isAccountBurgerClicked: boolean
  isOpen: boolean
  toggleAccordion: () => void
  navItems: NavItem[]
  accountBurgerItems?: accountBurgerType
}

const flags = [{flagSvg: GbFlag, shortName: 'en-US'}, {flagSvg: HyFlag, shortName: 'hy-AM'}, {
  flagSvg: RuFlag,
  shortName: 'ru-RU'
}]


export const Accordion: FC<AccordionProps> = (props) => {
  const {t, i18n} = useTranslation('main')
  const [language, setLanguage] = useState(i18n.language)
  const {isOpen, navItems, isAccountBurgerClicked, toggleAccordion} = props
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null)
  const {globalResize} = useContext(GlobalContext)!;

  const activeLanguage = flags.find((flag) => flag.shortName === language)

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  useEffect(() => {
    const lng = flags.find(el => el.flagSvg === language)
    if (lng) i18n.changeLanguage(lng.shortName).then()
  }, [i18n, language])

  useEffect(() => {
    if (!globalResize.isScreenLg && isAccountOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (accountRef.current && !event.composedPath().includes(accountRef.current)) {
          setIsAccountOpen(false)
        }
      }
      document.body.addEventListener('click', handleClickOutside)
      return () => document.body.removeEventListener('click', handleClickOutside)
    }
  }, [globalResize.isScreenLg, isAccountOpen])

  return (
    <div
      className={isAccountBurgerClicked ? useClass([AccordionStyle.accordionContainer, isOpen ? AccordionStyle["open"] : AccordionStyle["close"]]) : useClass([AccordionStyle.accordionContainer, AccordionStyle['firstRendered']])}>
      <div className={useClass([AccordionStyle.accordion, isOpen ? AccordionStyle["open"] : ''])}>
        <div className={AccordionStyle.navItemsContainer}>
          {navItems.map((item, index) => (
            item.DropdownLinks ?
              <AccordionItem
                key={index}
                title={item.MainLink}
                content={item.DropdownLinks}
                index={index}
                activeIndex={activeIndex}
                onAccordionClick={handleAccordionClick}
                toggleAccordion={toggleAccordion}
              />
              :
              <div className={AccordionStyle.accordionItem} key={index}>
                {item.MainLink.to ?
                  <Link to={item.MainLink.to}
                        className={useClass([AccordionStyle.accordionTitleLink, TextModule.h6_small])}
                        onClick={item.MainLink.to != "#" ? () => toggleAccordion() : () => {
                        }}>
                    {t(item.MainLink.title)}
                    {item.MainLink.to === '#' &&
                      <div className={useClass([AccordionStyle.errorModal, TextModule.paragraph])}>
                        <p>{t("Наше приложение ещё в разработке")}.</p>
                        <p>{t("Эта страница пока недоступна")}.</p>
                      </div>
                    }
                  </Link>
                  :
                  item.MainLink.action &&
                  <a key={index} className={useClass([AccordionStyle.accordionTitleLink, TextModule.h6_small])}
                     onClick={() => {
                       toggleAccordion()
                       item.MainLink.action && item.MainLink.action(true)
                     }}>
                    {t(item.MainLink.title)}
                  </a>
                }
              </div>
          ))}
        </div>
        <div
          className={useClass([AccordionStyle.accountContainer, isOpen ? AccordionStyle['open'] : AccordionStyle['closed']])}>
          {/*<div ref={accountRef} onClick={() => setIsAccountOpen(!isAccountOpen)} className={AccordionStyle.account}>*/}
          {/*  <div className={AccordionStyle.accountImageContainer}>*/}
          {/*    <img className={AccordionStyle.accountImage} src={Account} alt={''}/>*/}
          {/*  </div>*/}
          {/*  <span*/}
          {/*    className={combineStyle([AccordionStyle.username, TextModule.header_s])}>Username</span>*/}
          {/*  <div className={AccordionStyle.arrowContainer}>*/}
          {/*    <img*/}
          {/*      alt={''}*/}
          {/*      className={isAccountOpen ? AccordionStyle.arrowActive : AccordionStyle.arrow}*/}
          {/*      src={DropdownArrow}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className={AccordionStyle.languageDropdown}>
            <DropDownSelect
              data={flags.map(el => el.flagSvg)}
              placeholder={activeLanguage ? activeLanguage.flagSvg : flags[0].flagSvg}
              state={"white"}
              setValue={e => setLanguage(e)}
              icon
              up={true}
            />
          </div>
        </div>

        {/*<div*/}
        {/*  className={combineStyle([AccordionStyle.burgerDropdownContainer, isAccountOpen ? AccordionStyle['open'] : ''])}>*/}
        {/*  <Dropdown className={AccordionStyle.burgerDropdown} links={accountBurgerItems.DropdownLinks}>*/}
        {/*    {accountBurgerItems.children && <LngSwitcher/>}*/}
        {/*  </Dropdown>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
