var axios = require('axios')

const API_URL = 'https://www.easports.com/iframe/fifa17proclubs/api/platforms'
const API_PLATFORM = 'PC'

function * values (obj) {
  for (let prop of Object.keys(obj)) { yield obj[prop] }
}

exports.get = async function (endpoint) {
  try {
    const response = await axios.get(`${API_URL}/${API_PLATFORM}/${endpoint}`)
    return Array.from(values(response.data.raw))[0]
  } catch (e) {
    // console.log(e)
  }
}
