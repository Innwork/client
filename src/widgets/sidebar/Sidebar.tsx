import React, {FC, useState} from 'react';
import cls from "@src/widgets/sidebar/Sidebar.module.scss"
import {useClass} from "@src/shared/hooks";
import {TextModule} from "@src/shared/scss";
import CaretBottomIcon from "@assets/icons/Header/dropdown-arrow-down.svg"
import RightCaret from "@assets/icons/RightCaretGray.svg"
import CrossIcon from "@assets/icons/Header/cross.svg"
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {useTranslation} from "react-i18next";

export type TSection = {
  id: string,
  title: string
  subSections?: TSection[]
}

interface SidebarProps {
  sections: TSection[]
  link: string
  page: "copyright" | "privacy" | "rules" | "terms"
}

export const Sidebar: FC<SidebarProps> = ({sections, page, link}) => {
  const [activeSection, setActiveSection] = useState('0')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const {t} = useTranslation(`${page}`)

  const createSection = (section: TSection) => {
    if (!section.subSections) {
      return (
        <div onClick={() => setActiveSection(section.id)} className={cls.sectionHead}>
          <a className={cls.subsectionItem} key={section.id}
             onClick={() => {scrollToCenter(section.id); setIsSidebarOpen(false)}}>{t(section.title)}</a>
        </div>
      )
    } else {
      return (
        <div key={section.id}>
          <div className={cls.subsectionHead}>
            <div onClick={() => setActiveSection(section.id === activeSection ? undefined : section.id)}>
              <div className={useClass([cls.caretButton, section.id === activeSection ? cls["open"] : cls['closed']])}>
                <CaretBottomIcon/>
              </div>
            </div>
            <a className={cls.subsectionDropdown} onClick={() => {
              scrollToCenter(section.id);
              setActiveSection(section.id)
            }}>{t(section.title)}</a>
          </div>
          <div className={useClass([cls.subsection, section.id === activeSection ? cls["open"] : cls['closed']])}>
            {section.subSections.map((subsection) =>
              createSection(subsection)
            )}
          </div>
        </div>
      )
    }
  }

  function scrollToCenter(elementId: string) {
    let element = document.getElementById(elementId);
    let offset = element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2);
    window.scrollTo({top: offset, behavior: 'smooth'});
  }

  return (
    <>
        <div className={useClass([TextModule.paragraph_white, cls.sidebarContainer])}>
          <div className={cls.sidebarContent}>
            {sections.map((section) =>
              createSection(section)
            )}
          </div>
        </div>
        <div className={useClass([TextModule.h6_small, cls.burgerContainer])}>
          <div className={cls.burgerSidebar}>
            <div className={cls.burgerImg} onClick={() => setIsSidebarOpen(true)}>
              <RightCaret/>
            </div>
          </div>

          <div onClick={() => setIsSidebarOpen(false)} className={useClass([cls.burgerContentBackground, isSidebarOpen ? cls["open"] : cls['closed']])}>
            <div onClick={(e) => e.stopPropagation()} className={useClass([cls.burgerContent, isSidebarOpen ? cls["open"] : cls['closed']])}>
              <div className={cls.burgerClose} onClick={() => setIsSidebarOpen(false)}>
                <CrossIcon/>
              </div>
              {sections.map((section) =>
                createSection(section)
              )}
              <a href={link}>
                <MainBtn className={cls.downloadButton}>{t("Скачать файл")}</MainBtn>
              </a>
            </div>
          </div>
        </div>
    </>
  );
};