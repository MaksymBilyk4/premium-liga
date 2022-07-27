import React from 'react';

import "../assets/css/common.css";

import Subheader from "../components/Subheader";
import translate from "../i18n/translate";

const Teams = () => {
    return (
        <>
            <Subheader
                subheaderTheme={translate("navbar.members.teams")}
                title={translate("subheader.members.teams")}
            />

            <div className="container">
                Teams
            </div>
        </>
    );
};

export default Teams;