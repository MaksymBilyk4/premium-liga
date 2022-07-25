const ApiError = require("../error/ApiError");
const {Match, MatchInfo} = require("../models/models");

class MatchController {
    async create (req, res, next) {
        try {
            let {teamOneId, teamTwoId, teamOneScored, teamTwoScored, matchDate, matchTime, leagueId, tourId, info} = req.body;
            const match = await Match.create({teamOneId, teamTwoId, teamOneScored, teamTwoScored, matchDate, matchTime, leagueId, tourId});

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                   MatchInfo.create({
                       scoredTime: i.scoredTime,
                       matchId: match.matchId,
                       playerId: i.playerId,
                   });
                });
            }

            return res.json(match);
        }catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll (req, res, next) {
        try {
            const {leagueId, tourId} = req.query;
            let matches;
            if (leagueId && tourId) {
                matches = await Match.findAll({where: {leagueId, tourId}});
            }
            if (!leagueId && !tourId) {
                matches = await Match.findAll();
            }
            if (leagueId && !tourId) {
                matches = await Match.findAll({where: {leagueId}});
            }
            if (!leagueId && tourId) {
                matches = await Match.findAll({where: {tourId}});
            }

            return res.json(matches);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne (req, res, next) {
        try {
            const {id} = req.params;
            const match = await Match.findOne(
                {
                    where: {id},
                    include: [{model: MatchInfo, as: "info"}],
                }
            );

            return res.json(match);
        }catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new MatchController();