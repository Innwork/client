import {Photo} from "@src/pages/public/office/detail/components/photo";
import cls from "@src/pages/public/office/detail/style/detail.module.scss";
import {ContainerModule, TextModule, WidthModule} from "@src/shared/scss";
import {BaseInput, InputValid} from "@src/shared/ui/input";
import {IMainBaseInput} from "@src/shared/types";
import {useInput} from "@src/shared/hooks";
import {regEmail, regName, regPhone} from "@src/shared/constants";
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";

import Wifi from "@assets/icons/widgets/wifi.svg";
import Parking from "@assets/icons/widgets/parking.svg";
import Cleaning from "@assets/icons/widgets/LOCKER.svg";
import Protect from "@assets/icons/widgets/SECURITY-CAMERA.svg";

import FreeSpace from "@assets/img/plane-card/free-Space.png";
import NonFixed from "@assets/img/plane-card/non-fixed.png";
import PrivateSpace from "@assets/img/plane-card/privateWorkspace.png";
import FixedDesk from "@assets/img/plane-card/fixedDesk.png"


export const DetailPage = () => {
  const inputs: IMainBaseInput[] = [
    {
      input: {
        tag: 'firstName',
        label: "Имя",
        errText: "Некорректно введено имя",
        width: WidthModule.w_full,
        type: "text",
        successText: 'Данные введены корректно',
      },
      validators: useInput(
        "", {isEmpty: true, regExp: regName}
      )
    },
    {
      input: {
        tag: "lastName",
        label: "Фамилия",
        errText: "Некорректно введена фамилия",
        width: WidthModule.w_full,
        type: "text",
        successText: 'Данные введены корректно',
      },
      validators: useInput(
        "", {isEmpty: true, regExp: regName}
      )
    },
    {
      input: {
        tag: "email",
        label: "Почта",
        errText: "Некорректная почта",
        placeholder: "example@gmail.com",
        type: "email",
        successText: 'Данные введены корректно',
      },
      validators: useInput('', {
        isEmpty: true, regExp: regEmail
      }),
    },
    {
      input: {
        tag: "phone",
        label: "Номер телефона",
        errText: "Некорректный номер телефона",
        width: WidthModule.w_full,
        type: "text",
        successText: 'Данные введены корректно',
      },
      validators: useInput(
        "", {isEmpty: true, regExp: regPhone}
      )
    }
  ]

  return (
    <section className={ContainerModule.wrapper}>
      <div className={cls.head}>
        <h1 className={TextModule.h1}>Офис №1</h1>
        <div className={cls.nav_info}>
          <div className={cls.nav_info__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
            <p className={TextModule.paragraph}>Ереван, улица Дзорапа, 70/3</p>
          </div>

          <div className={cls.nav_info__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-building" viewBox="0 0 16 16">
              <path
                d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
              <path
                d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
            </svg>
            <p className={TextModule.paragraph}>300 метров от центра</p>
          </div>

          <div className={cls.nav_info__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-p-square" viewBox="0 0 16 16">
              <path
                d="M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z"/>
              <path
                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
            </svg>

            <p className={TextModule.paragraph}>500м<sup>2</sup></p>
          </div>
        </div>
      </div>

      <Photo>
        {[NonFixed, PrivateSpace, FixedDesk, FreeSpace, FreeSpace, FreeSpace]}
      </Photo>

      <div className={cls.container}>
        <div className={cls.content}>
          <div className={cls.general}>
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
          </div>

          <div className={cls.hr}></div>

          <div className={cls.flex_section}>
            <h3 className={TextModule.h3}>Что будет входить?</h3>

            <div className={cls.offer}>
              <div className={cls.offer__items}>
                <Wifi/>

                <p className={TextModule.paragraph}>Wifi</p>
              </div>

              <div className={cls.offer__items}>
                <Parking/>
                <p className={TextModule.paragraph}>
                  Парковка
                </p>
              </div>

              <div className={cls.offer__items}>
                <Cleaning/>

                <p className={TextModule.paragraph}>
                  Уборка в помещении
                </p>
              </div>

              <div className={cls.offer__items}>
                <Protect/>

                <p className={TextModule.paragraph}>
                  Охрана
                </p>
              </div>
            </div>
          </div>

          <div className={cls.hr}></div>

          <div className={cls.flex_section}>
            <h3 className={TextModule.h3}>Локация</h3>

            <div className={cls.map}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A752c3ccbd67dff2be2e89f1052377619562853a3c371a4f9973767077e87a87e&amp;source=constructor&&scroll=false"
                width="100%" height="300" title={"Карта"}></iframe>
            </div>

            <div className={cls.nav_info__item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              <p className={TextModule.paragraph}>Ереван, улица Дзорапа, 70/3</p>
            </div>
          </div>
        </div>

        <div className={cls.form}>
          <form className={cls.form_personal}>
            <div className={cls.form_personal__text}>
              <h6 className={TextModule.h6}>Форма заявки</h6>
              <p className={TextModule.paragraph}>Позвоните нам или оставьте заявку на сайте. Мы перезвоним вам в скором
                времени.</p>
            </div>

            <div className={cls.form_personal__inputs}>
              {
                inputs.map((el, index) =>
                  <InputValid validators={el.validators}
                              key={index}
                              label={el.input.label}
                              errText={el.input.errText}
                              successText={el.input.successText}
                  >
                    <BaseInput
                      {...el.input} {...el.validators}
                    />
                  </InputValid>
                )
              }

              <div className={cls.hr}></div>

              <MainBtn className={WidthModule.w__full}>Отправить</MainBtn>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};