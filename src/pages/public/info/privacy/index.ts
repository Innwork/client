import {lazy} from "react";

export const PrivacyChunk = lazy(
  () => import("@src/pages/public/info/privacy/ui/index").then(
    module => ({default: module.Privacy})
  )
)