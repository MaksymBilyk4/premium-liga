import {$host} from "./index";

export const createTour = async (tour) => {
    const {data} = await $host.post("/api/tour", tour);
    return data;
}

export const getAllTours = async () => {
    const {data} = await $host.get("/api/tour");
    return data;
}

export const getOneTour = async (id) => {
    const {data} = await $host.get("/api/tour/" + id);
    return data;
}