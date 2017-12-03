var api = require('./api')

exports.getSeasonLeaderboard = () => api.get(`seasonRankLeaderboard`)
exports.getOverallLeaderboard = () => api.get(`clubRankLeaderboard`)
