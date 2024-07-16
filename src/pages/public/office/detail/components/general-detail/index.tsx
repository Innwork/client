import { FC } from "react";
import { TextModule } from "@src/shared/scss";
import { GeneralDeatailType } from "./types/type"
import cls from "./styles/generalDetail.module.scss";

export const GeneralDetail:FC<GeneralDeatailType> = (props) => {
  const {
    price, floor, status, text
  } = props;

  return (
    <section className={cls.general_detail}>
      <h3 className={TextModule.h3}>Общая информация</h3>

      <ul>
        <li className={TextModule.paragraph}>{price}</li>
        <li className={TextModule.paragraph}>{floor}</li>
        <li>{status ? "Свобдно": "Занято"}</li>
      </ul>


      <div>
        <p className={TextModule.paragraph}>
          {text}    
        </p>
      </div>
    </section>
  )
}


{/* <div className={cls.general}>
            <h3 className={TextModule.h3}>Oбщая информация</h3>

            <ul className={cls.nav_ul}>
              <li className={TextModule.paragraph}>от 12 000 AMD</li>
              <li className={TextModule.paragraph}>12 этаж</li>
              <li className={TextModule.paragraph}>Свободно</li>
            </ul>
          </div>

          <div className={cls.general__text}>
            <p className={TextModule.paragraph}>
              Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
              текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию
              размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно
              пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое
              время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
              программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
          </div> */}