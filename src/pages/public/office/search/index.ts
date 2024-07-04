import {lazy} from "react";

export const SearchChunk = lazy(
  () => import("@src/pages/public/office/search/ui/index").then(
    m => ({default: m.Search})
  )
)