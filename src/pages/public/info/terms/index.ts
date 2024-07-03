import {lazy} from "react";

export const TermsChunk = lazy(
  () => import("@src/pages/public/info/terms/ui/index").then(
    module => ({default: module.Terms})
  )
)