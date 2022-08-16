import axios from 'axios'

const BASE_URL = "http://eflare.ir"

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/api/v1/villas`)
    return response.data
}
export { getProducts };