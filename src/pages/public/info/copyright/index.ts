import {lazy} from "react";

export const CopyrightChunk = lazy(
  () => import("@src/pages/public/info/copyright/ui/index").then(
    module => ({default: module.Copyright})
  )
)