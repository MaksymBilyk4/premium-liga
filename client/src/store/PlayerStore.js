import {makeAutoObservable} from "mobx";

export default class PlayerStore {
    constructor() {
        this._players = [];
        makeAutoObservable(this);
    }

    get players() {
        return this._players;
    }

    setPlayers(players) {
        this._players = players;
    }
}