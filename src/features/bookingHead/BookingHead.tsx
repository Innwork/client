import BookingHeadStyle from "./BookingHead.module.scss"
import {TextModule} from "@src/shared/scss";
import WhiteCrossIcon from "@assets/icons/WhiteCross.svg"
import {useTranslation} from "react-i18next";
import {useActions} from "@src/app/redux/hooks/useActions";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";

export const BookingHead = () => {
    const {setIsOpen} = useActions()
    const {t} = useTranslation('main')

    return (
        <div className={BookingHeadStyle.container}>
            <div className={BookingHeadStyle.content}>
                <div className={TextModule.h3__medium}>{t("Форма резервации")}</div>
                <MainBtn onClick={() => setIsOpen(false)}>
                    <WhiteCrossIcon className={BookingHeadStyle.svg}/>
                </MainBtn>
            </div>
            <div className={BookingHeadStyle.line}/>
        </div>
    );
};