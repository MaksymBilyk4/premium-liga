const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const League = sequelize.define("league", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const Team = sequelize.define("team", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    logo: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    played: {type: DataTypes.INTEGER, allowNull: false},
    scored: {type: DataTypes.INTEGER, allowNull: false},
    missed: {type: DataTypes.INTEGER, allowNull: false},
    wins: {type: DataTypes.INTEGER, allowNull: false},
    draws: {type: DataTypes.INTEGER, allowNull: false},
    defeats: {type: DataTypes.INTEGER, allowNull: false},
    points: {type: DataTypes.INTEGER, allowNull: false},
});

const Player = sequelize.define("player", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullName: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    nationality: {type: DataTypes.STRING, allowNull: false},
    birth: {type: DataTypes.STRING, allowNull: false},
    matches: {type: DataTypes.INTEGER, allowNull: false},
    scored: {type: DataTypes.INTEGER, allowNull: false},
    assists: {type: DataTypes.INTEGER, allowNull: false},
    rc: {type: DataTypes.INTEGER, allowNull: false},
    yc: {type: DataTypes.INTEGER, allowNull: false},
});

const Match = sequelize.define("match", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    teamOneId: {type: DataTypes.INTEGER, allowNull: false},
    teamTwoId: {type: DataTypes.INTEGER, allowNull: false},
    teamOneScored: {type: DataTypes.INTEGER, allowNull: false},
    teamTwoScored: {type: DataTypes.INTEGER, allowNull: false},
    matchDate: {type: DataTypes.STRING, allowNull: false},
    matchTime: {type: DataTypes.STRING, allowNull: false},
});

const MatchTeams = sequelize.define("match_teams", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Tour = sequelize.define("tour", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tourNumber: {type: DataTypes.INTEGER, allowNull: false, unique: false},
    date: {type: DataTypes.STRING, allowNull: false},
});

const Video = sequelize.define("video", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false, unique: false},
    url: {type: DataTypes.STRING, allowNull: true},
    urlOptional: {type: DataTypes.STRING, allowNull: true},
});

const MatchInfo = sequelize.define("match_info", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    scoredTime: {type: DataTypes.STRING, allowNull: true},
});

const Contact = sequelize.define("contact", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    telephone: {type: DataTypes.STRING, allowNull: false},
    teamName: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.STRING, allowNull: true}
});

League.hasMany(Team);
Team.belongsTo(League);

League.hasMany(Player);
Player.belongsTo(League);

League.hasMany(Match);
Match.belongsTo(League);

League.hasMany(Tour);
Tour.belongsTo(League);

Team.hasMany(Player);
Player.belongsTo(Team);

Tour.hasMany(Match);
Match.belongsTo(Tour);

Match.hasMany(Video);
Video.belongsTo(Match);

Match.hasMany(MatchInfo, {as: "info"});
MatchInfo.belongsTo(Match);

Player.hasMany(MatchInfo);
MatchInfo.belongsTo(Player);

Match.belongsToMany(Team, {through: MatchTeams});
Team.belongsToMany(Match, {through: MatchTeams});

module.exports = {
    League,
    Team,
    Player,
    Match,
    Tour,
    Video,
    MatchInfo,
    Contact,
}