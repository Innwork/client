import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from "@src/features/layout";
import {RotesLayout} from "@src/app/router/paths";

export const RouterApp: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                {
                    RotesLayout.map(
                        el => <Route path={el.path} element={el.element} key={el.path}/>
                    )
                }
            </Route>
        </Routes>
    );
};