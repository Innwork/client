import HeaderNavbarStyle from "./HeaderNavbar.module.scss";
import {LinkStyle, TextModule} from "@src/shared/scss";
import DropdownArrow from "@assets/icons/Header/dropdown-arrow-down.svg";
import {Dropdown} from "@src/shared/ui/dropdown";
import {CNavLink} from "@src/shared/ui/link";
import {useTranslation} from "react-i18next";
import {FC} from "react";
import {NavItem} from "@src/shared/types";
import {useClass} from "@src/shared/hooks";

interface HeaderNavbarProps {
  navItems: NavItem[]
}

export const HeaderNavbar:FC<HeaderNavbarProps> = ({navItems}) => {
  const {t} = useTranslation('main')
  return (
    <nav className={HeaderNavbarStyle.Navbar}>
      {
        navItems.map((item) =>
          <div className={HeaderNavbarStyle.NavbarItem} key={item.MainLink.title}>
            {item.DropdownLinks ?
              <>
                <div className={HeaderNavbarStyle.LinkContainer}>
                        <span
                          className={useClass([TextModule.span, HeaderNavbarStyle.Link, LinkStyle.link])}>
                            {t(item.MainLink.title)}
                          <div className={HeaderNavbarStyle.DropdownArrowContainer}>
                            <DropdownArrow/>
                          </div>
                        </span>
                  <Dropdown className={HeaderNavbarStyle.Dropdown} links={item.DropdownLinks}/>
                </div>
              </>
              :
              <div className={HeaderNavbarStyle.LinkContainer} >
                {item.MainLink.to &&
                  <CNavLink to={item.MainLink.to} className={HeaderNavbarStyle.Link}
                            fontStyle={'span'}>
                    {t(item.MainLink.title)}
                  </CNavLink>
                }
              </div>
            }
            {item.MainLink.title === "Новости" &&
              <div className={useClass([HeaderNavbarStyle.errorModal, TextModule.paragraph])}>
                <p>{t("Наше приложение ещё в разработке")}.</p>
                <p>{t("Эта страница пока недоступна")}.</p>
              </div>
            }
          </div>
        )
      }
    </nav>
  );
};