import {makeAutoObservable} from "mobx";

export default class VideoStore {
    constructor() {
        this._videos = [];
        makeAutoObservable(this);
    }

    get videos() {
        return this._videos;
    }

    setVideos(videos) {
        this._videos = videos;
    }
}