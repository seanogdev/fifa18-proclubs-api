var api = require('./api')

function * values (obj) {
  for (let prop of Object.keys(obj)) { yield obj[prop] }
}

exports.getClubIdByName = async query => {
  const res = await api.get(`clubsComplete/${query}`)
  return res.clubId
}
exports.getClubInfo = clubId => api.get(`clubs/${clubId}/info`)
exports.getClubMatchHistory = clubId => api.get(`clubs/${clubId}/matches`)
exports.getClubMembers = async clubId => {
  const res = await api.get(`clubs/${clubId}/members`)
  return Array.from(values(res))
}
exports.getClubMemberStats = clubId => api.get(`clubs/${clubId}/membersComplete`)
exports.getClubSeasonRank = clubId => api.get(`clubs/${clubId}/seasonRank`)
exports.getClubSeasonStats = clubId => api.get(`clubs/${clubId}/seasonalStats`)
exports.getClubStats = clubId => api.get(`clubs/${clubId}/stats`)
