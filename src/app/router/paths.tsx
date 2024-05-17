import {IBaseRoute} from "@src/shared/types";
import {AboutChunk, HomeChunk, NotFoundPageChunk} from "@src/pages";

interface IPaths extends IBaseRoute{
    exact?: boolean
    children?: IPaths[]
}

export const RotesLayout: IPaths[] = [
    {path: "/", element: <HomeChunk/>},
    {path: "/about", element: <AboutChunk/>},
    {path: "*", element: <NotFoundPageChunk/>}
]