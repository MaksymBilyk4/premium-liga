import {$host} from "./index";

export const createContact = async (contact) => {
    const {data} = await $host.post("/api/contact", contact);
    return data;
}