import {createContext, FC, ReactNode} from 'react';
import {GlobalResize} from "@src/app/provider/types/GlobalTypes";
import {useResize} from "@src/shared/hooks";

interface IGlobalContext {
    globalResize: GlobalResize
}

export const GlobalContext = createContext<IGlobalContext | undefined>(undefined);

export const GlobalProvider: FC<{ children: ReactNode }> = ({children}) => {
    const globalResize = useResize();

    return (
        <GlobalContext.Provider value={{globalResize}}>
            {children}
        </GlobalContext.Provider>
    );
};