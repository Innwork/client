import {lazy} from "react";

export const AdditionalWorkspace = lazy(
  () => import("@src/pages/public/Home/components/additional-workspace/ui/index").then(
    m => ({default: m.AdditionalWorkspace})
  )
)

export const Plane = lazy(
  () => import("@src/pages/public/Home/components/plane/ui/index").then(
    m => ({default: m.Plane})
  )
)

export const BannerHome = lazy(
  () => import("@src/pages/public/Home/components/banner-home/ui/index").then(
    m => ({default: m.BannerHome})
  )
)

export const ChooseLocation = lazy(
  () => import("@src/pages/public/Home/components/сhoose-location/ui/index").then(
    m => ({default: m.ChooseLocation})
  )
)

export const Calculator = lazy(
  () => import("@src/pages/public/Home/components/сalculator/ui/index").then(
    m => ({default: m.Calculator})
  )
)