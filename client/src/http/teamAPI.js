import {$host} from "./index";

export const createTeam = async (team) => {
    const {data} = await $host.post("/api/team", team);
    return data;
}

export const getAllTeams = async () => {
    const {data} = await $host.get("/api/team");
    return data;
}

export const getOneTeam = async (id) => {
    const {data} = await $host.get("/api/team/" + id);
    return data;
}