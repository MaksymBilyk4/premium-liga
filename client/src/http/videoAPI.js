import {$host} from "./index";

export const createVideo = async (video) => {
    const {data} = await $host.post("/api/video", video);
    return data;
}

export const getAllVideos = async () => {
    const {data} = await $host.get("/api/video");
    return data;
}

export const getOneVideo = async (id) => {
    const {data} = await $host.get("/api/video/" + id);
    return data;
}