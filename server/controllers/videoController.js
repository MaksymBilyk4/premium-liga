const {Video} = require("../models/models");
const ApiError = require("../error/ApiError");

class VideoController {
    async create (req, res, next) {
        try {
            const {title, url, urlOptional, matchId} = req.body;
            const video = await Video.create({url, urlOptional, matchId, title});
            return res.json(video);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getAll (req, res, next) {
        try {
            const {matchId} = req.query;
            let videos;
            if (!matchId) {
                videos = await Video.findAll();
            }
            if (matchId) {
                videos = await Video.findAll({where: {matchId}});
            }

            return res.json(videos);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne (req, res, next) {
        try {
            const {id} = req.params;
            const video = await Video.findOne({where: {id}});
            return res.json(video);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new VideoController();