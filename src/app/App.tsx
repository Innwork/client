import '@src/app/index.scss'
import {BrowserRouter} from "react-router-dom";
import {Suspense, useEffect} from "react";
import {RouterApp} from "@src/app/router";
import {GlobalProvider} from "@src/app/provider";
import {Provider} from "react-redux";
import {store} from "@src/app/redux/store";
import {PreLoad} from "@src/widgets/pre-load";
import {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {useTranslation} from "react-i18next";

export const App = () => {
    const {i18n} = useTranslation()
    useEffect(() => {
        i18n.changeLanguage("en-US").then()
    },[])

    return (
        <Suspense fallback={
            <PreLoad words={["posts", "images", "space", "discounts"]}>Loading</PreLoad>
        }>
            <SkeletonTheme baseColor="#f2f2f2" highlightColor="#525252">
                <GlobalProvider>
                    <Provider store={store}>
                        <BrowserRouter>
                            <RouterApp/>
                        </BrowserRouter>
                    </Provider>
                </GlobalProvider>
            </SkeletonTheme>
        </Suspense>
    );
};
