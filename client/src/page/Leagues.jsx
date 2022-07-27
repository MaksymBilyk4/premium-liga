import React from 'react';

import "../assets/css/common.css";

import Subheader from "../components/Subheader";
import translate from "../i18n/translate";

const Leagues = () => {
    return (
        <>
            <Subheader
                subheaderTheme={translate("navbar.leagues.tournaments")}
                title={translate("navbar.leagues.allTournaments")}
            />

            <div className="container">
                Leagues
            </div>
        </>
    );
};

export default Leagues;