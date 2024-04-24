import PersonalInfoFormStyle from "./PersonalInfoForm.module.scss"
import {useTranslation} from "react-i18next";
import {TextModule, WidthModule} from "@src/shared/scss";
import {useInput} from "@src/shared/hooks";
import {regEmail, regName, regPhone} from "@src/shared/constants";
import {BaseInput, InputValid} from "@src/shared/ui/input";
import {IMainBaseInput} from "@src/shared/types";
import {PackageCard} from "@src/features/packageCard";
import {ReserveWorkspace} from "@src/features/reservWorkspace/ReservWorkspace";
import {useSelector} from "react-redux";
import {
  selectBookingWorkspace,
  selectCartTariffs
} from "@src/app/redux/Booking/BookingSlice";
import {ErrorSnack} from "@src/shared/ui/snackbar/ErrorSnack";
import {packages} from "@src/widgets/packageSelection/model/PackageCardModel";
import {useEffect} from "react";
import {useActions} from "@src/app/redux/hooks/useActions";

export const PersonalInfoForm = () => {
  const cartTariffs = useSelector(selectCartTariffs)
  const cartWorkspaces = useSelector(selectBookingWorkspace)
  const {setAreInputsValid, setPersonalInfo} = useActions()
  const {t} = useTranslation('main')

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
        label: "почта",
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


  useEffect(() => {
    inputs.map((item) => {
      if (item.input.tag) {
        if (!item.validators.isDirty && !item.validators.isValid){
          setAreInputsValid({[item.input.tag]: false})
        } else if (item.validators.isDirty && !item.validators.isValid) {
          setAreInputsValid({[item.input.tag]: false})
        } else {
          setAreInputsValid({[item.input.tag]: true})
        }
      }

      setPersonalInfo({
        firstName: inputs[0].validators.value,
        lastName: inputs[1].validators.value,
        email: inputs[2].validators.value,
        phone: inputs[3].validators.value
      })
    })

  }, [inputs[0].validators.value, inputs[1].validators.value, inputs[2].validators.value, inputs[3].validators.value,
    inputs[0].validators.isDirty, inputs[1].validators.isDirty, inputs[2].validators.isDirty, inputs[3].validators.isDirty,
    inputs[0].validators.isValid, inputs[1].validators.isValid, inputs[2].validators.isValid, inputs[3].validators.isValid]);



  return (
    <>

      <div className={PersonalInfoFormStyle.radioStatus}>
        <div className={PersonalInfoFormStyle.cardIndicator}>
          <div className={PersonalInfoFormStyle.indicatorDot}/>
        </div>
        <div className={TextModule.paragraph}>{t("Личная информация")}</div>
      </div>

      <div className={PersonalInfoFormStyle.form}>
        {
          inputs.map((el, index) =>
            <InputValid validators={el.validators}
                        key={index}
                        label={el.input.label && t(el.input.label)}
                        errText={el.input.errText && t(el.input.errText)}
                        successText={el.input.successText && t(el.input.successText)}
            >
              <BaseInput
                {...el.input} {...el.validators}
              />
            </InputValid>
          )
        }
      </div>

      <div className={PersonalInfoFormStyle.radioStatus}>
        <div className={PersonalInfoFormStyle.cardIndicator}>
          <div className={PersonalInfoFormStyle.indicatorDot}/>
        </div>
        <div className={TextModule.paragraph}>{t("Выбранные пакеты")}</div>
      </div>

      <div className={PersonalInfoFormStyle.packages}>
        <>
          {cartTariffs.map((tariff) =>
            <PackageCard
              title={tariff.tariffName}
               date={tariff.duration}
               variant={'default'}
               price={tariff.price}
               info={packages.filter((pack) => pack.title === tariff.tariffName)[0].info}
            />
          )}
        </>
        <>
          {cartWorkspaces.map((item) =>
            <ReserveWorkspace
              src={item.imagePath}
              header={item.workspaceName}
              title={item.title}
              duration={item.duration}
              time={item.time}
              price={item.price}
            />
          )}
        </>

        {(cartTariffs.length + cartWorkspaces.length) === 0 &&
          <ErrorSnack>{t("Упс ... Вы не выбрали ни один пакет")}</ErrorSnack>
        }
      </div>
    </>
  );
};