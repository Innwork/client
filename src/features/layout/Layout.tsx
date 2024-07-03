import {Outlet} from "react-router-dom";
import {FC, useEffect} from "react";
import {Footer, Header} from "@src/features/layout/Section";
import {Booking} from "@src/widgets/booking";
import {selectIsBookingOpen} from "@src/app/redux/Booking/BookingSlice";
import {ContainerModule} from '@src/shared/scss'
import {useAppSelector} from "@src/app/redux/hooks/redux";

export const Layout: FC = () => {
  const isBookingOpen = useAppSelector(selectIsBookingOpen)

  useEffect(() => {
    if (isBookingOpen) document.documentElement.style.setProperty('overflow', 'hidden');
    else document.documentElement.style.removeProperty('overflow');
  }, [isBookingOpen])


  return (
    <>
      {/*<SnackBar status={"alert"} className={classes.snack}>*/}
      {/*  {t("Наша версия все еще находится в разработке. Эта версия не окончательная")}*/}
      {/*</SnackBar>*/}

      <Header/>

      <main className={ContainerModule.container}>
        <Booking/>
        <Outlet/>
      </main>

      <Footer/>
    </>
  );
};