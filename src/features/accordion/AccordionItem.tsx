import {FC, useEffect, useRef, useState} from "react";
import AccordionStyle from "./Accordion.module.scss";
import {Link} from "react-router-dom";
import {AccordionItemType} from "src/shared/types";
import {combineStyle} from "@src/shared/utils";
import DropdownArrow from "@assets/icons/Header/dropdown-arrow-down.svg";
import {TextModule} from "@src/shared/scss";
import {useTranslation} from "react-i18next";


export const AccordionItem: FC<AccordionItemType> = (props) => {
  const {title, content, index, activeIndex, onAccordionClick, toggleAccordion} = props
  const [isActive, setIsActive] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const {t} = useTranslation('main')

  useEffect(() => {
    index === activeIndex ? setIsActive(true) : setIsActive(false)
    contentRef.current && (isActive ? (contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px") : contentRef.current.style.maxHeight = "0px");
  }, [activeIndex, index, isActive])

  return (
    <div>
      <div className={AccordionStyle.accordionTitle} onClick={() => onAccordionClick(index)}>
        <div className={AccordionStyle.arrowContainer}>
          <DropdownArrow className={isActive ? AccordionStyle.arrowActive : AccordionStyle.arrow}/>
        </div>
        <div className={TextModule.h6_small}>{t(title.title)}</div>
      </div>
      <div ref={contentRef} className={combineStyle([AccordionStyle.contentContainer, ''])} style={{maxHeight: "0px"}}>
        {
          content.map((burgerItem) =>
            burgerItem.path != '' ?
              <Link className={combineStyle([TextModule.h6_small, AccordionStyle.accordionContentItemLink])}
                    key={burgerItem.title}
                    to={burgerItem.path} onClick={() => toggleAccordion()}>
                {t(burgerItem.title)}
              </Link>
              :
              <p key={burgerItem.title} className={combineStyle([TextModule.h6_small, AccordionStyle.accordionContentItemLink])}>{t(burgerItem.title)}</p>
          )
        }
      </div>
    </div>
  );

};