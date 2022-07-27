import React from 'react';

import "../assets/css/common.css";

import Subheader from "../components/Subheader";
import translate from "../i18n/translate";

const Players = () => {

    return (
        <>
            <Subheader
                subheaderTheme={translate("navbar.members.players")}
                title={translate("subheader.members.players")}
            />

            <div className="container">
                Players
            </div>
        </>
    );
};

export default Players;