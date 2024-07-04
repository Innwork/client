import React, {FC} from 'react';
import {PhotoType} from "@src/pages/public/office/detail/components/photo/types/PhotoType";
import cls from "@src/pages/public/office/detail/components/photo/styles/photo.module.scss";
import {TextModule} from "@src/shared/scss";

export const Photo:FC<PhotoType> = ({children}) => {

  return (
    <div>
      <div className={cls.grid_container}>
        {
          children.map((el, index) => {
            if (index < 5) {
              if (index === 0) {
                return (
                  <div className={cls.grid_container__item_start} key={index}>
                    <img src={el} alt={el} />
                  </div>
                );
              } else if (index === 4) {
                return (
                  <div className={cls.grid_container__items_last} key={index} onClick={() => console.log("modal")}>
                    <div className={cls.grid_container__items_last__bg}></div>
                    <div className={cls.grid_container__items_last__content}>
                      <p className={TextModule.h6}>
                        Еще +{children.length - 5}
                      </p>
                    </div>
                    <img className={cls.grid_container__items_last__img} src={el} alt={el}/>
                  </div>
                );
              } else {
                return (
                  <div className={cls.grid_container__items_last} key={index}>
                    <img src={el} alt={el}/>
                  </div>
                );
              }
            }
            return null;
          })
        }
      </div>
    </div>
  );
};
