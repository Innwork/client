import React, {useEffect, useRef} from 'react';
import cls from "@src/widgets/booking-modal/BookingModal.module.scss"
import {useSelector} from "react-redux";
import {
  selectBookingWorkspace,
  selectCartTariffs,
  selectFormStatus,
  selectIsFormSent
} from "@src/app/redux/Booking/BookingSlice";
import {useClass} from "@src/shared/hooks";
import {useActions} from "@src/app/redux/hooks/useActions";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import OrangeMark from "@assets/icons/orangeMark.svg"
import {TextModule} from "@src/shared/scss";
import {ReservationCard} from "@src/features/reservation-card";

export const BookingModal = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const isFormSent = useSelector(selectIsFormSent)
  const formStatus = useSelector(selectFormStatus)
  const cartTariffs = useSelector(selectCartTariffs)
  const cartWorkspaces = useSelector(selectBookingWorkspace)
  const {setIsFormSent} = useActions()

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
            <div className={useClass([TextModule.h6_small__medium, cls.text_head])}>Sending your request...</div>
            <div className={cls.loader}></div>
          </>
          : formStatus === "rejected" ?
            <>
              <div className={cls.text}>
                <div className={useClass([TextModule.h6_small__medium, cls.text_head])}>Something went wrong.</div>
                <div className={useClass([TextModule.paragraph__ligth, cls.grayFont])}>Your order request was not sent.
                </div>
                <br/>
                <div className={useClass([TextModule.paragraph__ligth, cls.grayFont])}>Questions? Suggestions? insightful thoughts?
                </div>
                <a className={TextModule.paragraph__ligth} target={"_blank"} href={'/'} >Shoot us an email.</a>
              </div>
            </>
            :
        <>
          <div className={cls.markIcon}>
            <OrangeMark/>
          </div>
          <div className={cls.text}>
            <div className={useClass([TextModule.h6_small__medium, cls.text_head])}>Thank you very much for reserving your place</div>
            <div className={useClass([TextModule.paragraph__ligth, cls.grayFont])}>Lera Ivanova's order ASK123456
              has been successfully completed. You will find all the information about his glass and we
              will send you a confirmation email below.
            </div>
            <br/>
            <div className={useClass([TextModule.paragraph__ligth, cls.grayFont])}>Questions? Suggestions? insightful thoughts?
            </div>
            <a className={TextModule.paragraph__ligth} target={"_blank"} href={'/'} >Shoot us an email.</a>
          </div>
          <div className={cls.packagesContainer}>
            {cartTariffs.map((tariff) =>
              <ReservationCard price={tariff.price} title={tariff.tariffName} additional={[tariff.duration ?? "", tariff.time ?? "", tariff.additional ?? ""]}/>
            )}
            {cartWorkspaces.map((workspace) =>
              <ReservationCard price={workspace.price} title={workspace.workspaceName} additional={[workspace.duration ?? "", workspace.time ?? ""]}/>
            )}
          </div>
        </>
        }
        <MainBtn className={useClass([cls.button, TextModule.paragraph])} onClick={() => setIsFormSent(false)}>Close</MainBtn>
      </div>
    </div>
  );
};