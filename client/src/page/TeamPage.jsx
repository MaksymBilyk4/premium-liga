import React from 'react';
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";

const TeamPage = observer(() => {
    const {id} = useParams();
    return (
        <div>
            Team {id}
        </div>
    );
});

export default TeamPage;