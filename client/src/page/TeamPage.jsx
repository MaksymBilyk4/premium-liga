import React from 'react';

import "../assets/css/common.css";

import Subheader from "../components/Subheader";
import translate from "../i18n/translate";
import {useParams} from "react-router-dom";

const TeamPage = () => {
    const {id} = useParams();

    return (
        <>
            <Subheader
                subheaderTheme={` / ${id}`}
                optSubheaderTheme={translate("navbar.members.teams")}
                title={translate("subheader.members.aboutTeam")}
            />

            <div className="container">
                Team {id}
            </div>
        </>
    );
};

export default TeamPage;