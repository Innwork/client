import {IBaseRoute} from "@src/shared/types";
import {HomeChunk} from "@src/pages/public/Home";
import {AboutChunk} from "@src/pages/public/About";
import {CopyrightChunk} from "@src/pages/public/info/copyright";
import {InfoPageChunk} from "@src/pages/public/info/information";
import {PrivacyChunk} from "@src/pages/public/info/privacy";
import {RulesChunk} from "@src/pages/public/info/rules";
import {TermsChunk} from "@src/pages/public/info/terms";
import {NotFoundPageChunk} from "@src/pages/not-found";
import {SearchChunk} from "@src/pages/public/office/search";
import {DetailChunk} from "@src/pages/public/office/detail";
import { LocationsChunk } from "@src/pages/public/office/location";
import { LocationItemsChunk } from "@src/pages/public/office/loaction-item";

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
    {path: "/office", element: <SearchChunk/>},
    {path: "/detail", element: <DetailChunk/>},
    {path: "/location", element: <LocationsChunk/>},
    {path: "/location/:name", element:<LocationItemsChunk/>},
    {path: "*", element: <NotFoundPageChunk/>}
]