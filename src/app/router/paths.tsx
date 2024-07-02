import {IBaseRoute} from "@src/shared/types";
import {
    AboutChunk,
    CopyrightChunk,
    HomeChunk,
    InfoPageChunk,
    NotFoundPageChunk,
    PrivacyChunk,
    RulesChunk,
    TermsChunk
} from "@src/pages";

interface IPaths extends IBaseRoute{
    exact?: boolean
    children?: IPaths[]
}

export const RotesLayout: IPaths[] = [
    {path: "/", element: <HomeChunk/>},
    {path: "/about", element: <AboutChunk/>},
    {path: "/terms", element: <TermsChunk/>},
    {path: "/rules", element: <RulesChunk/>},
    {path: "/copyright", element: <CopyrightChunk/>},
    {path: "/privacy", element: <PrivacyChunk/>},
    {path: "/info", element: <InfoPageChunk/>},
    {path: "*", element: <NotFoundPageChunk/>}
]