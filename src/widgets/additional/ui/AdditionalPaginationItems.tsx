import {Dispatch, FC, SetStateAction} from "react";
import {TextModule} from "@src/shared/scss";
import classes from "@src/widgets/additional/style/AdditionalPagination.module.scss"
import {combineStyle} from "@src/shared/utils";

type TItemIndex = {
    currentIndex: number,
    activeIndex: number,
    setActiveIndex:  Dispatch<SetStateAction<number>>
}

export interface IAdditionalPaginationItems{
    src: string,
    header: string,
    title: string,
    price: string,
    index: TItemIndex
}

export const AdditionalPaginationItems:FC<IAdditionalPaginationItems> = (props) => {
    const {
        src, header, title, price, index
    } = props;

    return (
        <div
            onClick={() => {
                index.setActiveIndex(index.currentIndex)
            }}
            className={index.currentIndex === index.activeIndex ? classes.container_active : classes.container}>
            <div className={classes.image}>
                <img src={src} alt={header}/>
            </div>

            <div className={classes.text_content}>
                <h4 className={TextModule.header__lg}>
                    {header}
                </h4>

                <span className={combineStyle([
                    TextModule.span, classes.text_content__span
                ])}>
                    {price}
                </span>

                <p className={TextModule.paragraph}>
                    {title}
                </p>
            </div>
        </div>
    );
};
