import {$host} from "./index";

export const createPlayer = async (player) => {
    const {data} = await $host.post("/api/player", player);
    return data;
}

export const getAllPlayers = async () => {
    const {data} = await $host.get("/api/player");
    return data;
}

export const getOnePlayer = async (id) => {
    const {data} = await $host.get("/api/player/" + id);
    return data;
}