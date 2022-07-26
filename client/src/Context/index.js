import {useReducer, createContext} from "react";
import defaultContext from "./defaultContext";
import {saveToStorage} from "../utils/localeStorage";
import {STORAGE_KEY} from "../utils/constants/locale";
const AppContext = createContext(null);
const RESET = "reset";
const SET_LOCALE_LANG = "setLocale";

let reducer = (state, action) => {
    switch (action.type) {
        case RESET:
            return defaultContext;
        case SET_LOCALE_LANG:
            saveToStorage(STORAGE_KEY, action.locale);
            return {...state, locale: action.locale};
    }
};

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = {state, dispatch};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};
