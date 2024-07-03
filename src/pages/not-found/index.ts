import {lazy} from "react";

export const NotFoundPageChunk = lazy(
  () => import("@src/pages/not-found/ui/index").then(
    module => ({default: module.NotFound})
  )
)