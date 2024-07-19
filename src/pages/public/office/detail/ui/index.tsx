import {Photo} from "@src/pages/public/office/detail/components/photo";
import cls from "@src/pages/public/office/detail/style/detail.module.scss";
import {ContainerModule} from "@src/shared/scss";
import Wifi from "@assets/icons/widgets/wifi.svg";
import Parking from "@assets/icons/widgets/parking.svg";
import Cleaning from "@assets/icons/widgets/LOCKER.svg";
import Protect from "@assets/icons/widgets/SECURITY-CAMERA.svg";
import FreeSpace from "@assets/img/plane-card/free-Space.png";
import NonFixed from "@assets/img/plane-card/non-fixed.png";
import PrivateSpace from "@assets/img/plane-card/privateWorkspace.png";
import FixedDesk from "@assets/img/plane-card/fixedDesk.png"
import {FormDetail} from "../components/form-detail";
import {MapDetail} from "../components/map-detail";
import {GeneralDetail} from "../components/general-detail";
import {OfferDetail} from "@src/pages/public/office/detail/components/offer-detail";
import { HeaderDeatil } from "../components/header-datail";


export const DetailPage = () => {
  return (
    <section className={ContainerModule.wrapper}>
      <HeaderDeatil 
        address="Ереван, улица Дзорапа, 70/3"
        center="300 метров от центра"
        square="500м2"
      />

      <Photo>
        {[NonFixed, PrivateSpace, FixedDesk, FreeSpace, FreeSpace, FreeSpace]}
      </Photo>

      <div className={cls.container}>
        <div className={cls.content}>
          <GeneralDetail
            price={"Узнать цену"}
            floor={"12 этаж"}
            status={false}
            text={"Текст рыба"}
          />

          <div className={cls.hr}></div>

          <div className={cls.flex_section}>
            <OfferDetail ListOffer={[
              {icon: <Wifi/>, title: "Высокоскоростной wifi"},
              {icon: <Cleaning/>, title: "Ежедневная уборка"},
              {icon: <Parking/>, title: "Удобная парковка"},
              {icon: <Protect/>, title: "Круглосуточная охрана"}
            ]}/>
          </div>

          <div className={cls.hr}></div>

          <div className={cls.flex_section}>
            <MapDetail address="улица Дзорапа, 70/3"/>
          </div>
        </div>

        <div className={cls.form}>
          <FormDetail/>
        </div>
      </div>
    </section>
  );
};