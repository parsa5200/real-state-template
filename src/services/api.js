import axios from 'axios'

const BASE_URL = "https://eflare.ir"

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/villas`)
    return response.data
}

export {getProducts};