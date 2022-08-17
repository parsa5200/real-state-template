const axios = require("axios").default
axios.defaults.timeout = 4000
class UtilService {
  axiosInstance = async ({ url, data = {}, params, token, method = "get", type }) => {
    try {
      const result = await axios({
        method,
        url: params ? url + "?" + params.join("&") : url,
        data,
      })
      return result.data
    } catch (error) {
      if (error.response) {
        console.error({
          responseError: error.response.data,
          url,
          type,
          data: error.response.config.data,
        })
        return false
      } else if (error.request) {
        console.error({ type, url, axiosRequestError: error.request })
        return Promise.reject(error.request)
      } else {
        console.log({ type, url })
      }
      console.error({ type, url, error })
      return false
    }
  }
}
module.exports = new UtilService()
