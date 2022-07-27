import React from 'react';

import "../assets/css/common.css";

import Subheader from "../components/Subheader";
import translate from "../i18n/translate";
import {useParams} from "react-router-dom";

const MatchPage = () => {
    const {id} = useParams();

    return (
        <>
            <Subheader
                optSubheaderTheme={translate("subheader.matchDetails")}
                subheaderTheme={` / ${id}`}
                title={translate("subheader.round")}
                optionalTitle={"id of tour"}
            />


            <div className="container">
                Match {id}
            </div>
        </>
    );
};

export default MatchPage;