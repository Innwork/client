import {lazy} from "react";

export const RulesChunk = lazy(
  () => import("@src/pages/public/info/rules/ui/index").then(
    module => ({default: module.Rules})
  )
)