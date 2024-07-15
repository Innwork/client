import {TextModule, WidthModule} from "@src/shared/scss";
import {BaseInput, InputValid} from "@src/shared/ui/input";
import {IMainBaseInput} from "@src/shared/types";
import {useInput} from "@src/shared/hooks";
import { MainBtn } from "@src/shared/ui/btn/main-btn/MainBtn";
import {regEmail, regName, regPhone} from "@src/shared/constants";
import cls from "./styles/formdetail.module.scss";
import { FormEvent, useEffect, useState } from "react";

export const FormDetail = () => {
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

  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if(inputs.every(item => item.validators.isValid)){
      setDisabled(false)
    }
  }, [inputs])

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // todo --- сделать api
  }

  return (
    <form className={cls.form} onSubmit={(e) => handlerSubmit(e)}>
      <section className={cls.form_wrapper}>

      <header className={cls.form_header}>
        
        <h6 className={TextModule.h6}>
          Форма заявки
        </h6>

        <p className={TextModule.paragraph}>
          Позвоните нам или оставьте заявку на сайте
          Мы перезвоним вам в скором времени.
        </p>

      </header>

      <div className={cls.form_inputs}>
        {inputs.map((el, index) =>
          <InputValid
            key={index}
            label={el.input.label} 
            errText={el.input.errText}
            successText={el.input.successText}
            validators={el.validators}>
              <BaseInput {...el.input} {...el.validators}/>
          </InputValid>
          )}
      </div>

      <MainBtn disabled={disabled}>
        <p className={TextModule.paragraph}>Отправить</p>
      </MainBtn>

      </section>
    </form>
  )
}