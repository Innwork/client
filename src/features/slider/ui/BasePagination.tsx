import {FC} from 'react';
import classes from "@src/features/slider/style/Pagination.module.scss";
import {useClass} from "@src/shared/hooks";

interface IBasePagination {
    totalSlides: number
    activeIndex: number
}

export const BasePagination:FC<IBasePagination> = ({totalSlides, activeIndex}) => {
    return (
        <div className={classes.base_pagination}>
            {
                Array.from({length: totalSlides}, (_, i) => i).map(
                    (_, index) => <span className={useClass([
                        classes.base_pagination__item, index === activeIndex && classes['active']
                    ])} key={index}/>
                )
            }
        </div>
    );
};
