import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppContextProvider} from "./Context";
import LangProvider from "./Provider";

export const Context = createContext(null);

ReactDOM.render(
    <React.StrictMode>
        {/*<Context.Provider value={{*/}
        {/*    user: new UserStore(),*/}
        {/*    device: new DeviceStore()*/}
        {/*}}>*/}
        <AppContextProvider>
            <LangProvider>
                <App/>
            </LangProvider>
        </AppContextProvider>
        {/*</Context.Provider>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();