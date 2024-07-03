import {lazy} from "react";

export const InfoPageChunk = lazy(
  () => import("@src/pages/public/info/information/ui/index").then(
    module => ({default: module.Information})
  )
)