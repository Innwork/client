import BookingStyle from "@src/widgets/booking/Booking.module.scss"
import {PersonalInfoForm} from "@src/widgets/personalInfoForm";
import {BookingHead} from "@src/features/bookingHead";
import {PackageSelection} from "@src/widgets/packageSelection";
import {useCallback, useState,} from "react";
import {Stepper} from "@src/features/stepper";
import {
  selectAreInputsValid, selectBookingPersonalInfo,
  selectBookingWorkspace,
  selectCartTariffs,
  selectIsBookingOpen, selectPage,
  selectPWSpeopleCount
} from "@src/app/redux/Booking/BookingSlice";
import {Tariffs} from "@src/app/redux/Booking/BookingTypes";
import {ReservAdditional} from "@src/widgets/reservWorkspaces";
import {DirectionButton} from "@src/shared/ui/btn";
import {useTranslation} from "react-i18next";

import {useActions} from "@src/app/redux/hooks/useActions";
import {TData} from "@src/app/redux/Booking/actions";
import {BookingModal} from "@src/widgets/booking-modal";
import {useAppSelector} from "@src/app/redux/hooks/redux";
import {useClass} from "@src/shared/hooks";

export const Booking = () => {
  const isBookingOpen = useAppSelector(selectIsBookingOpen)
  const cartTariffs = useAppSelector(selectCartTariffs)
  const cartWorkspaces = useAppSelector(selectBookingWorkspace)
  const areInputsValid = useAppSelector(selectAreInputsValid)
  const peopleCount = useAppSelector(selectPWSpeopleCount)
  const personalInfo = useAppSelector(selectBookingPersonalInfo)
  const page = useAppSelector(selectPage)
  const [termsAgreement, setTermsAgreement] = useState(false)
  const steps = 3
  const {postReservationData, setPage, setIsOpen} = useActions()
  const {t, i18n} = useTranslation('main')

  const languages = ["en-US", "hy-AM", "ru-RU"]

  const sendReservationRequest = useCallback(() => {
    const tariffs = cartTariffs.map((tariff) => {
      return {
        "namePackages": t(tariff.tariffName),
        "price": tariff.price,
        "date": `${tariff.duration}${tariff.tariffName === Tariffs.NON_FIXED_FLEXI_DESK ? (' ' + tariff.time) : tariff.additional}`,
        "persons": tariff.tariffName === Tariffs.PRIVATE_OFFICE ? peopleCount.toString() : undefined
      }
    })

    const workspaces = cartWorkspaces.map((workspace) => {
      return {
        "namePackages": t(workspace.workspaceName),
        "price": workspace.price,
        "date": `${workspace.duration}${' ' + workspace.time}`,
      }
    })

    const data = {
      "lngCode": languages.includes(i18n.language) ? i18n.language : "en-US",
      "person": {
        "name": personalInfo.firstName,
        "lastName": personalInfo.lastName,
        "email": personalInfo.email,
        "telephone": personalInfo.phone,
      },
      "packages": [
        ...workspaces,
        ...tariffs
      ]
    }

    postReservationData(data as TData)

  }, [cartTariffs, cartWorkspaces, peopleCount, personalInfo, postReservationData])

  return (
    <>
      <div onClick={() => setIsOpen(false)} className={useClass([BookingStyle.wrapper, isBookingOpen ? BookingStyle["open"] : BookingStyle["closed"]])}>
        <div onClick={(e) => e.stopPropagation()} className={useClass([BookingStyle.container, isBookingOpen ? BookingStyle["open"] : BookingStyle["closed"]])}>
          <BookingHead/>
          <Stepper steps={steps} page={page} setPage={setPage}/>
          {
            page === 1 ?
              <PackageSelection/>
              : page === 2 ?
                <ReservAdditional/>
                : <PersonalInfoForm termsAgreement={termsAgreement} setTermsAgreement={setTermsAgreement}/>
          }

          <div className={BookingStyle.directionButtonsContainer}>
            <div className={BookingStyle.directionButtons}>
              <DirectionButton onClick={page > 1 ? () => setPage(page - 1) : () => {}} variant={'back'}>{t("Назад")}</DirectionButton>
              <DirectionButton onClick={page < steps ? ( page === 3 ? ((cartTariffs.length + cartWorkspaces.length) != 0 ? () => setPage(page + 1) : () => {}) : () => setPage(page + 1)) :
                ((page === steps && termsAgreement && !(((cartTariffs.length + cartWorkspaces.length) === 0) || (Object.values(areInputsValid).includes(false))))? sendReservationRequest : () => {})} variant={'next'} disabled={(page === steps ? (((cartTariffs.length + cartWorkspaces.length) === 0) || (Object.values(areInputsValid).includes(false)) || !termsAgreement) : (page === 2 && (cartTariffs.length + cartWorkspaces.length) === 0))}>{page === steps ? t( "Отправить") : t( "Дальше")}</DirectionButton>
            </div>
          </div>
        </div>
      </div>
      <BookingModal/>
    </>
  );
};