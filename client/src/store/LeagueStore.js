import {makeAutoObservable} from "mobx";

export default class LeagueStore {
    constructor() {
        this._leagues = [];
        makeAutoObservable(this);
    }

    get leagues() {
        return this._leagues;
    }

    setLeagues(leagues) {
        this._leagues = leagues
    }
}