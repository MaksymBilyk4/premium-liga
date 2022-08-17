import {$host} from "./index";

export const createLeague = async (league) => {
    const {data} = await $host.post("/api/league", league);
    return data;
}

export const getAllLeagues = async () => {
    const {data} = await $host.get("/api/league");
    return data;
}

export const getOneLeague = async (id) => {
    const {data} = await $host.get("/api/league/" + id);
    return data;
}