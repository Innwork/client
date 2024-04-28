import BookingStyle from "@src/widgets/booking/Booking.module.scss"
import {PersonalInfoForm} from "@src/widgets/personalInfoForm";
import {BookingHead} from "@src/features/bookingHead";
import {PackageSelection} from "@src/widgets/packageSelection";
import {useCallback, } from "react";
import {combineStyle} from "@src/shared/utils";
import {Stepper} from "@src/features/stepper";
import {useSelector} from "react-redux";
import {
  selectAreInputsValid, selectBookingPersonalInfo,
  selectBookingWorkspace,
  selectCartTariffs,
  selectIsBookingOpen, selectPage,
  selectPWSpeopleCount
} from "@src/app/redux/Booking/BookingSlice";
import {Tariffs} from "@src/app/redux/Booking/BookingTypes";
import {ReservWorkspaces} from "@src/widgets/reservWorkspaces";
import {DirectionButton} from "@src/shared/ui/btn";
import {useTranslation} from "react-i18next";

import {useActions} from "@src/app/redux/hooks/useActions";
import {TData} from "@src/app/redux/Booking/actions";


export const Booking = () => {
  const isBookingOpen = useSelector(selectIsBookingOpen)
  const cartTariffs = useSelector(selectCartTariffs)
  const cartWorkspaces = useSelector(selectBookingWorkspace)
  const areInputsValid = useSelector(selectAreInputsValid)
  const peopleCount = useSelector(selectPWSpeopleCount)
  const personalInfo = useSelector(selectBookingPersonalInfo)
  const page = useSelector(selectPage)
  const steps = 3
  const {postReservationData, setPage} = useActions()
  const {t} = useTranslation('main')

  const sendReservationRequest = useCallback(() => {
    const tariffs = cartTariffs.map((tariff) => {
      return {
        "namePackages": tariff.tariffName,
        "price": tariff.price,
        "date": `${tariff.duration}${tariff.tariffName === Tariffs.NON_FIXED_FLEXI_DESK ? (' ' + tariff.time) : tariff.additional}`,
        "persons": tariff.tariffName === Tariffs.PRIVATE_OFFICE ? peopleCount : undefined
      }
    })

    const workspaces = cartWorkspaces.map((workspace) => {
      return {
        "namePackages": workspace.workspaceName,
        "price": workspace.price,
        "date": `${workspace.duration}${' ' + workspace.time}`,
      }
    })

    const data = {
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
    <div className={combineStyle([BookingStyle.wrapper, isBookingOpen ? BookingStyle["open"] : BookingStyle["closed"]])}>
      <div className={combineStyle([BookingStyle.container, isBookingOpen ? BookingStyle["open"] : BookingStyle["closed"]])}>
        <BookingHead/>
        <Stepper steps={steps} page={page} setPage={setPage}/>
        {
          page === 1 ?
            <PackageSelection/>
            : page === 2 ?
              <ReservWorkspaces/>
              : <PersonalInfoForm/>
        }
        <div className={BookingStyle.directionButtonsContainer}>
          <div className={BookingStyle.directionButtons}>
            <DirectionButton onClick={page > 1 ? () => setPage(page - 1) : () => {}} variant={'back'}>{t("Назад")}</DirectionButton>
            <DirectionButton onClick={page < steps ? ( page === 3 ? ((cartTariffs.length + cartWorkspaces.length) != 0 ? () => setPage(page + 1) : () => {}) : () => setPage(page + 1)) :
              (!(page === steps && (((cartTariffs.length + cartWorkspaces.length) === 0) || (Object.values(areInputsValid).includes(false))))? sendReservationRequest : () => {})} variant={'next'} disabled={(page === steps ? (((cartTariffs.length + cartWorkspaces.length) === 0) || (Object.values(areInputsValid).includes(false))) : (page === 2 && (cartTariffs.length + cartWorkspaces.length) === 0))}>{page === steps ? t( "Отправить") : t( "Дальше")}</DirectionButton>
          </div>
        </div>
      </div>
    </div>
  );
};