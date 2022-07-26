import {makeAutoObservable} from "mobx";

export default class TourStore {
    constructor() {
        this._tours = [];
        makeAutoObservable(this);
    }

    get tours() {
        return this._tours;
    }

    setTours(tours) {
        this._tours = tours;
    }
}