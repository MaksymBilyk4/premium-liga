import {makeAutoObservable} from "mobx";

export default class MatchStore {
    constructor() {
        this._matches = [];
        makeAutoObservable(this);
    }

    get matches() {
        return this._matches;
    }

    setMatches(matches) {
        this._matches = matches;
    }
}