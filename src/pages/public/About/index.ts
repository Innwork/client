import {lazy} from "react";

export const AboutChunk = lazy(
  () => import("@src/pages/public/About/ui/index").then(
    module => ({default: module.About})
  )
)