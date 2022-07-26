import {makeAutoObservable} from "mobx";

export default class TeamStore {
    constructor() {
        this._teams = [];
        makeAutoObservable(this);
    }

    setTeams(teams) {
        this._teams = teams;
    }

    get teams() {
        return this._teams;
    }
}