import {FC} from "react";
import classes from "@src/widgets/additional/style/AdditionalSlide.module.scss";
import {TextModule} from "@src/shared/scss";


export interface IAdditionSlide {
    src: string,
    header: string,
    price: string
}

export const AdditionSlide:FC<IAdditionSlide> = (props) => {
    const {src, header, price} = props;

    return (
        <div className={classes.swiper_slide}>
            <div className={classes.swiper_slide_content}>
                <h4 className={TextModule.header_l__white}>
                    {header}
                </h4>
                <p className={TextModule.paragraph_light__white}>
                    {price}
                </p>
            </div>

            <div className={classes.swiper_slide__bg}></div>
            <img className={classes.swiper_slide__img} src={src} alt={header}/>
        </div>
    );
};

