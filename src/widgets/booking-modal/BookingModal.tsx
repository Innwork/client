import React, {useEffect, useRef} from 'react';
import cls from "@src/widgets/booking-modal/BookingModal.module.scss"
import {
  selectBookingWorkspace,
  selectCartTariffs,
  selectFormStatus,
  selectIsFormSent, selectReservationData
} from "@src/app/redux/Booking/BookingSlice";
import {useClass} from "@src/shared/hooks";
import {useActions} from "@src/app/redux/hooks/useActions";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import OrangeMark from "@assets/icons/orangeMark.svg"
import {TextModule} from "@src/shared/scss";
import {ReservationCard} from "@src/features/reservation-card";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "@src/app/redux/hooks/redux";

export const BookingModal = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const isFormSent = useAppSelector(selectIsFormSent)
  const formStatus = useAppSelector(selectFormStatus)
  const cartTariffs = useAppSelector(selectCartTariffs)
  const cartWorkspaces = useAppSelector(selectBookingWorkspace)
  const reservationData = useAppSelector(selectReservationData)
  const {setIsFormSent} = useActions()
  const {t} = useTranslation("main")

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && isFormSent && (!event.composedPath().includes(modalRef.current))) {
        setIsFormSent(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [isFormSent])

  return (
    <div className={useClass([cls.container, isFormSent ? cls["open"] : cls["closed"]])}>
      <div ref={modalRef} className={cls.modal}>
        {formStatus === "pending" ?
          <>
            <div className={useClass([TextModule.h6_small__medium, cls.text_head])}>{t("Отправка запроса...")}</div>
            <div className={cls.loader}></div>
          </>
          : formStatus === "rejected" ?
            <>
              <div className={cls.text}>
                <div className={useClass([TextModule.h6_small__medium, cls.text_head])}>{t("Что-то пошло не так.")}</div>
                <div className={useClass([TextModule.paragraph__ligth, cls.grayFont])}>{t("Ваш запрос на заказ не был отправлен.")}
                </div>
                <br/>
                <div className={useClass([TextModule.paragraph__ligth, cls.grayFont])}>
                  {t("Вопросы? Предложения? Мысли?")}
                </div>
                <a className={TextModule.paragraph__ligth} target={"_blank"} href={"mailto:Info@innwork.com"}>{t("Напишите нам письмо.")}</a>
              </div>
            </>
            :
        <>
          <div className={cls.markIcon}>
            <OrangeMark/>
          </div>
          <div className={cls.text}>
            <div className={useClass([TextModule.h6_small__medium, cls.text_head])}>{t("Спасибо за то что вы выбрали нас!")}</div>
            <div className={useClass([TextModule.paragraph__ligth, cls.grayFont])}>{`${t("Заказ №")} ${reservationData.numberOrder} ${t("на имя")} 
              ${reservationData.response.person.name + " " + reservationData.response.person.lastName} ${t("был успешно завершен. Всю информацию, мы уже направили на ваш email.")}`}
            </div>
            <br/>
            <div className={useClass([TextModule.paragraph__ligth, cls.grayFont])}>
              {t("Вопросы? Предложения? Мысли?")}
            </div>
            <a className={TextModule.paragraph__ligth} target={"_blank"} href={'/'}>{t("Напишите нам письмо.")}</a>
          </div>
          <div className={cls.packagesContainer}>
            {cartTariffs.map((tariff) =>
              <ReservationCard price={tariff.price} title={t(tariff.tariffName)} additional={[tariff.duration ?? "", tariff.time ?? "", tariff.additional ?? ""]}/>
            )}
            {cartWorkspaces.map((workspace) =>
              <ReservationCard price={workspace.price} title={t(workspace.workspaceName)} additional={[workspace.duration ?? "", workspace.time ?? ""]}/>
            )}
          </div>
        </>
        }
        <MainBtn className={useClass([cls.button, TextModule.paragraph])} onClick={() => setIsFormSent(false)}>Close</MainBtn>
      </div>
    </div>
  );
};