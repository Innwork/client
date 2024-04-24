import {ChangeEvent, useEffect, useState} from "react";

interface Ivalidators {
    isEmpty: boolean,
    regExp: RegExp,
}

export const useInput = (initialValue: string, validation: Ivalidators) => {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const valid = useValidation(value, validation)

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }

    const onBlur = (): void => {
        setIsDirty(true);
    }

    return {
        value, isDirty, onChange, setValue, onBlur, ...valid
    }

}

const useValidation = (value: string, validation: Ivalidators) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const [regExpError, setRegExpError] = useState(false);

    useEffect(() => {
        for (const key in validation) {
            switch (key) {
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'regExp':
                    setRegExpError(validation.regExp.test(value));
            }
        }
    }, [validation, value])

    useEffect(() => {
        if (isEmpty || !regExpError) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [isEmpty, regExpError])

    return {
        isEmpty, regExpError, isValid
    }
}