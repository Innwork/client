import {lazy} from "react";

export const HomeChunk = lazy(
  () => import("@src/pages/public/Home/ui/index").then(
    module => ({default: module.Home})
  )
)