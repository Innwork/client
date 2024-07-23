import { lazy } from "react";

export const LocationsChunk = lazy(
  () => import("@src/pages/public/office/location/ui/index").then(
    m => ({default: m.Locations})
  )
)