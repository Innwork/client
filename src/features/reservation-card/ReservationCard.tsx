import React, {FC} from 'react';
import cls from "@src/features/reservation-card/ReservationCard.module.scss"
import {Tariffs, Workspaces} from "@src/app/redux/Booking/BookingTypes";
import {useClass} from "@src/shared/hooks";
import {TextModule} from "@src/shared/scss";

interface ReservationCardProps {
  price: string
  title: Workspaces | Tariffs
  additional: string[]
}

export const ReservationCard:FC<ReservationCardProps> = (props) => {
  const {price, title, additional} = props

  return (
    <div className={cls.cardContainer}>
      <div className={TextModule.h6__regular}>{title}</div>
      <div className={cls.info}>
        <div className={TextModule.paragraph__ligth}>
          {additional.map((item) =>
            <div>{item}</div>
          )}
        </div>
        <div className={useClass([cls.price, TextModule.paragraph__ligth])}>
          {price} AMD
        </div>
      </div>
    </div>
  );
};