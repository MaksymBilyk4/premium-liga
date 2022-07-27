import React from 'react';

import "../assets/css/common.css";

import Subheader from "../components/Subheader";
import translate from "../i18n/translate";

const Matches = () => {
    return (
        <>
            <Subheader
                subheaderTheme={translate("navbar.matches")}
                title={translate("subheader.leagueMatches")}
            />

            <div className="container">
                Matches
            </div>
        </>
    );
};

export default Matches;