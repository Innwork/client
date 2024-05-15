import {lazy} from "react";


export const HomeChunk = lazy(
    () => import("@src/pages/Home/Home").then(
        module => ({default: module.Home})
    )
)

export const AboutChunk = lazy(
    () => import("@src/pages/About/About").then(
        module => ({default: module.About})
    )
)

export const NotFoundPageChunk = lazy(
  () => import("@src/pages/not-found/NotFound").then(
    module => ({default: module.NotFound})
  )
)