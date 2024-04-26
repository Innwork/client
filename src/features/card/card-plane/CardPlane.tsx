import {FC} from "react";
import {TextModule} from "@src/shared/scss";
import classes from "@src/features/card/card-plane/cardPlane.module.scss";
import {useClass} from "@src/shared/hooks";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {useActions} from "@src/app/redux/hooks/useActions";
import {Tariffs} from "@src/app/redux/Booking/BookingTypes";

export interface ICardPlane {
    header: string
    subtitle: string
    src: string
    tag: Tariffs
    service: Array<string>
    rules: string | Array<string>
    price: string | Array<string>
}

export const CardPlane:FC<ICardPlane> = (props) => {
    const {header, subtitle, src, service, rules, price, tag} = props;
  const {setIsOpen, setTariff, setPage} = useActions()

    return (
        <div className={classes.card}>
            <div className={classes.header}>
                <h6 className={TextModule.h6__medium}>{header}</h6>
                <span className={TextModule.span}>{subtitle}</span>
            </div>
            
            <div className={classes.img_container}>
                <img src={src} alt={src}/>
            </div>

            <div className={classes.service_container}>
                <span className={useClass([
                    classes.service_container__span_small, TextModule.span
                ])}>
                    В тариф входит
                </span>

                <ul className={classes.service_wrapper}>
                    {service.map((el, index) => <li className={classes.service_li} key={index}>
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0994 1.00012L4.46914 9.12275L1.00085 5.43065" stroke="#F8731A" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className={TextModule.span}>{el}</span>
                    </li>)}
                </ul>
            </div>

            {
                (Array.isArray(rules) && Array.isArray(price)) ? <div className={classes.price_rectangle__container}>
                    {rules.map((el, index) => <div className={classes.price_rectangle}>
                        <span className={TextModule.span}>{el}</span>
                        <p className={TextModule.paragraph__medium}>{price[index]}</p>
                    </div>)}
                </div> : <div className={classes.price}>
                    <span className={TextModule.paragraph}>{rules}</span>
                    <p className={TextModule.h3__medium}>{price}</p>
                </div>
            }

            <MainBtn className={classes.btn}  onClick={() => {
              setIsOpen(true)
              setPage(1)
              setTariff(tag)
            }}>
                <p className={TextModule.paragraph}>Забронировать</p>
            </MainBtn>
        </div>
    );
};