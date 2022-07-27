import React from 'react';

import "../assets/css/common.css";

import Subheader from "../components/Subheader";
import translate from "../i18n/translate";
import {useParams} from "react-router-dom";

const PlayerPage = () => {
    const {id} = useParams();

    return (
        <>
            <Subheader
                subheaderTheme={` / ${id}`}
                optSubheaderTheme={translate("navbar.members.players")}
                title={translate("subheader.members.aboutPlayer")}
            />

            <div className="container">
                Player {id}
            </div>
        </>
    );
};

export default PlayerPage;