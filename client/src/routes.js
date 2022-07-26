import Admin from "./page/Admin";
import {
    ADMIN_ROUTE, CONTACTS_ROUTE,
    HOME_ROUTE,
    LEAGUES_ROUTE,
    MATCHES_ROUTE,
    NOT_FOUND,
    PLAYERS_ROUTE,
    TEAMS_ROUTE,
    WORLD_CUP_ROUTE
} from "./utils/constants/routes";
import Home from "./page/Home";
import WorldCup from "./page/WorldCup";
import Matches from "./page/Matches";
import Leagues from "./page/Leagues";
import Teams from "./page/Teams";
import Players from "./page/Players";
import Contacts from "./page/Contacts";
import LeaguePage from "./page/LeaguePage";
import MatchPage from "./page/MatchPage";
import TeamPage from "./page/TeamPage";
import PlayerPage from "./page/PlayerPage";
import NotFound from "./page/NotFound";

export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: WORLD_CUP_ROUTE,
        Component: WorldCup,
    },
    {
        path: MATCHES_ROUTE,
        Component: Matches,
    },
    {
        path: LEAGUES_ROUTE,
        Component: Leagues,
    },
    {
        path: TEAMS_ROUTE,
        Component: Teams,
    },
    {
        path: PLAYERS_ROUTE,
        Component: Players,
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts,
    },
    {
        path: LEAGUES_ROUTE + "/:id",
        Component: LeaguePage,
    },
    {
        path: MATCHES_ROUTE + "/:id",
        Component: MatchPage,
    },
    {
        path: TEAMS_ROUTE + "/:id",
        Component: TeamPage,
    },
    {
        path: PLAYERS_ROUTE + "/:id",
        Component: PlayerPage,
    },
    {
        path: NOT_FOUND,
        Component: NotFound,
    }
]