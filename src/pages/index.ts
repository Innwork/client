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

export const CopyrightChunk = lazy(
    () => import("@src/pages/copyright/Copyright").then(
        module => ({default: module.Copyright})
    )
)

export const PrivacyChunk = lazy(
    () => import("@src/pages/privacy/Privacy").then(
        module => ({default: module.Privacy})
    )
)

export const NotFoundPageChunk = lazy(
  () => import("@src/pages/not-found/NotFound").then(
    module => ({default: module.NotFound})
  )
)

export const InfoPageChunk = lazy(
  () => import("@src/pages/information/Information").then(
    module => ({default: module.Information})
  )
)