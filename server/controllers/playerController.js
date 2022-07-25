const {Player} = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class PlayerController {
    async create(req, res, next) {
        try {
            const {fullName, nationality, birth, matches, scored, assists, rc, yc, teamId, leagueId} = req.body;
            const {photo} = req.files;
            let photoName = uuid.v4() + ".jpg";
            photo.mv(path.resolve(__dirname, "../", "static", photoName));

            const player = await Player.create({
                fullName,
                photo: photoName,
                nationality,
                birth,
                matches,
                scored,
                assists,
                rc,
                yc,
                teamId,
                leagueId
            });

            return res.json(player);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getAll(req, res) {
        const {teamId, leagueId} = req.query;
        let players;

        if (!teamId && !leagueId) {
            players = await Player.findAll();
        }
        if (teamId && leagueId) {
            players = await Player.findAll({where: {teamId, leagueId}});
        }
        if (!teamId && leagueId) {
            players = await Player.findAll({where: {leagueId}});
        }
        if (teamId && !leagueId) {
            players = await Player.findAll({where: {teamId}});
        }

        return res.json(players);
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const player = await Player.findOne({where: {id}});
            return res.json(player);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new PlayerController();