const ApiError = require("../error/ApiError");
const {Team} = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class TeamController {
    async create(req, res, next) {
        try {
            const {name, played, scored, missed, wins, draws, defeats, points, leagueId} = req.body;
            const {logo, photo} = req.files;
            let logoName = uuid.v4() + ".jpg";
            let photoName = uuid.v4() + ".jpg";
            logo.mv(path.resolve(__dirname, "../", "static", logoName));
            photo.mv(path.resolve(__dirname, "../", "static", photoName));

            const team = await Team.create({
                name,
                logo: logoName,
                photo: photoName,
                played,
                scored,
                missed,
                wins,
                draws,
                defeats,
                points,
                leagueId
            });
            return res.json(team);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {leagueId} = req.query;
            let teams;

            if (leagueId) {
                teams = await Team.findAll({where: {leagueId}});
            }
            if (!leagueId) {
                teams = await Team.findAll();
            }

            return res.json(teams);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const team = await Team.findOne({where: {id}});
            return res.json(team);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new TeamController();