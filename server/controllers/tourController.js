const ApiError = require("../error/ApiError");
const {Tour} = require("../models/models");

class TourController {
    async create(req, res, next) {
        try {
            const {date, leagueId, tourNumber} = req.body;
            const tour = await Tour.create({date, leagueId, tourNumber});
            return res.json(tour);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {leagueId} = req.query;
            let tours;

            if (leagueId) {
                tours = await Tour.findAll({where: {leagueId}});
            }
            if (!leagueId) {
                tours = await Tour.findAll();
            }

            return res.json(tours);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const tour = await Tour.findOne({where: {id}});
            return res.json(tour);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new TourController();