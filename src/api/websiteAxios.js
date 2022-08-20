import axios from "axios";
import Cookie from "js-cookie";
import { constants, config } from "../values";

export default axios.create({
  baseURL: constants.baseURL,
  headers: {
    authorization: `Bearer ${Cookie.get(constants.TOKEN)}`,
    accept: `application/json`,
  },
  crossDomain: true,
});
