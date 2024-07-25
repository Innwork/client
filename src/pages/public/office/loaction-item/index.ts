import { lazy } from "react";

export const LocationItemsChunk = lazy(
  () => import("./ui/index").then(
    m => ({default: m.LocationItem})
  )
)