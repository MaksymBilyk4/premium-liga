import {$host} from "./index";

export const createTeam = async team => {
    const {data} = await $host.post("api/team", team);
    return data;
}

export const fetchTeam = async () => {
    const {data} = await $host.get("api/team");
    return data;
}