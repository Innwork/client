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

export const TermsChunk = lazy(
    () => import("@src/pages/terms/Terms").then(
        module => ({default: module.Terms})
    )
)

export const RulesChunk = lazy(
    () => import("@src/pages/rules/Rules").then(
        module => ({default: module.Rules})
    )
)

export const NotFoundPageChunk = lazy(
  () => import("@src/pages/not-found/NotFound").then(
    module => ({default: module.NotFound})
  )
)