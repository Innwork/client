import cls from "@src/pages/public/office/search/components/field/styles/filed.module.scss";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {BaseInput, DropDownSelect} from "@src/shared/ui/input";
import {TextModule} from "@src/shared/scss";

export const Filed = () => {
  const data = [
    "Улица Арсена Амиряна, 4/2",
    "Улица Верин Антараин, 138/2",
    "Улица Дзорапа, 70/3"
  ]

  return (
    <div className={cls.filed_container}>
      <div className={cls.filed_content}>
        <div className={cls.filed_inputs}>
          <DropDownSelect data={data} placeholder={data[0]} state={"white"}/>

          <BaseInput placeholder={"от 9 900 AMD"} type={"number"}/>
          <BaseInput placeholder={"до 12 000 AMD"} type={"number"}/>

          <MainBtn>
            <p className={TextModule.paragraph}>Поиск</p>
          </MainBtn>
        </div>
      </div>
    </div>
  );
};