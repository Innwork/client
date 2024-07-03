import {useClass} from "@src/shared/hooks/useClass";
import {useInput} from "@src/shared/hooks/use-input/useInput";
import {Ivalidators} from "@src/shared/hooks/use-input/useInputType";
import {useResize} from "@src/shared/hooks/use-resize/useResize";
import {TypeResize} from "@src/shared/hooks/use-resize/types/ResizeTypes";

import {useSlides} from "@src/shared/hooks/useSlides";
import {
    SCREEN_ES,
    SCREEN_LG,
    SCREEN_MD,
    SCREEN_SM,
    SCREEN_XL,
    SCREEN_XXL
} from "@src/shared/hooks/use-resize/constants/constants";

export {
    useSlides,
    useClass,
    useInput,
    useResize,
    SCREEN_ES,
    SCREEN_LG,
    SCREEN_MD,
    SCREEN_SM,
    SCREEN_XL,
    SCREEN_XXL
}

export type {
    Ivalidators
}

export {
    TypeResize
}