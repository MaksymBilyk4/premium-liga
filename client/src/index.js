import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppContextProvider} from "./Context";
import LangProvider from "./Provider";
import TeamStore from "./store/TeamStore";
import LeagueStore from "./store/LeagueStore";
import PlayerStore from "./store/PlayerStore";
import MatchStore from "./store/MatchStore";
import VideoStore from "./store/VideoStore";

export const Context = createContext(null);

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            league: new LeagueStore(),
            team: new TeamStore(),
            player: new PlayerStore(),
            match: new MatchStore(),
            video: new VideoStore(),
        }}>
            <AppContextProvider>
                <LangProvider>
                    <App/>
                </LangProvider>
            </AppContextProvider>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();