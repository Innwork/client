import {Outlet} from "react-router-dom";
import {FC, useEffect} from "react";
import {Footer, Header} from "@src/features/layout/Section";
import {SnackBar} from "@src/shared/ui/snackbar";
import classes from "@src/features/Layout/Section/scss/layout.module.scss";
import {useTranslation} from "react-i18next";
import {Booking} from "@src/widgets/booking";
import {useAppSelector} from "@src/app/redux/hooks/redux";
import {selectIsBookingOpen, selectIsFormSent} from "@src/app/redux/Booking/BookingSlice";
import {useSelector} from "react-redux";
import {ContainerModule} from '@src/shared/scss'

export const Layout: FC = () => {


  const isFormSent = useAppSelector(selectIsFormSent)
  const isBookingOpen = useSelector(selectIsBookingOpen)
  const {t} = useTranslation("main");

  useEffect(() => {
    if (isBookingOpen) document.documentElement.style.setProperty('overflow', 'hidden');
    else document.documentElement.style.removeProperty('overflow');
  }, [isBookingOpen])


  return (
    <>
      {/*<SnackBar status={"alert"} className={classes.snack}>*/}
      {/*  {t("Наша версия все еще находится в разработке. Эта версия не окончательная")}*/}
      {/*</SnackBar>*/}

      {isFormSent &&
        <SnackBar status={"success"} className={classes.snack} active={isFormSent}>
          {t("Форма отправлена успешно")}
        </SnackBar>
      }

      <Header/>

      <main className={ContainerModule.container}>
        <Booking/>
        <Outlet/>
      </main>

      <Footer/>
    </>
  );
};