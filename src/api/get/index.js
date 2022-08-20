import Cookies from "js-cookie";
import { logOuthandler } from "../../../helpers/function";
import { constants } from "../../values";
import routes from "../routes";
import webSiteAxios from "../webSiteAxios";

const dashboardData = async () => {
  const url =
    Cookies.get(constants.USER_TYPE) === "ADMIN" ? routes.getDashboardData : routes.superAgentGetDashboardData;
  console.log({ url });
  try {
    const response = await webSiteAxios.get(url);
    console.log({ response, url });
    return response.data.result;
  } catch (e) {
    if (e.response.data.CODE === 5098) {
      window.location.href = "/administrator/login";
      logOuthandler();
    }
  }
};

export default dashboardData;
