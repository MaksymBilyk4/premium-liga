const ApiError = require("../error/ApiError");
const {League} = require("../models/models");

class LeagueController {
    async create (req, res, next) {
        try {
            const {name} = req.body;
            const league = await League.create({name});
            return res.json(league);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getAll (req, res, next) {
        try {
            const leagues = await League.findAll();
            return res.json(leagues);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne (req, res, next) {
        try {
            const {id} = req.params;
            const league = await League.findOne({where: {id}});
            return res.json(league);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new LeagueController();