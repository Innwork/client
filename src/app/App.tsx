import '@src/app/index.scss'
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {RouterApp} from "@src/app/router";
import {GlobalProvider} from "@src/app/provider";
import {Provider} from "react-redux";
import {store} from "@src/app/redux/store";
import {PreLoad} from "@src/widgets/pre-load";

export const App = () => {
    return (
        <Suspense fallback={
            <PreLoad words={["posts", "images", "space", "discounts"]}>Loading</PreLoad>
        }>
            <GlobalProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <RouterApp/>
                    </BrowserRouter>
                </Provider>
            </GlobalProvider>
        </Suspense>
    );
};
