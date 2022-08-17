import {$host} from "./index";

export const createMatch = async (match) => {
    const {data} = await $host.post("/api/match", match);
    return data;
}

export const getAllMatches = async () => {
    const {data} = await $host.get("/api/match");
    return data;
}

export const getOneMatch = async (id) => {
    const {data} = await $host.get("/api/match/" + id);
    return data;
}