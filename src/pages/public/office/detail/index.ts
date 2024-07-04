import {lazy} from "react";

export const DetailChunk = lazy(
  () => import("@src/pages/public/office/detail/ui/index").then(
    m => ({default: m.DetailPage})
  )
)