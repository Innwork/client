import {FC} from "react";
import {TextModule} from "@src/shared/scss";
import {OfferDetailType} from "./type/type";
import cls from "./styles/offerDetail.module.scss";


export const OfferDetail:FC<OfferDetailType> = ({ListOffer}) => {
  return (
    <section className={cls.offer}>
      <h3 className={TextModule.h3}>Что будет входить?</h3>

      <div className={cls.offer_options}>
        {ListOffer.map((el) => <div className={cls.offer_options__items}>
          {el.icon}

          <p>{el.title}</p>
        </div>)}
      </div>
    </section>
  );
};