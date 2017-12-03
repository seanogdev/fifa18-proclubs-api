var api = require('./api')

exports.getMembersClubStats = (clubId, blazeId) => api.get(`clubs/${clubId}/members/${blazeId}/stats?filters=pretty`)
exports.getMembersStats = blazeId => api.get(`members/${blazeId}/stats?filters=pretty`)
