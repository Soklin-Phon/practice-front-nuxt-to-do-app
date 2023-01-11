import axios from "axios";
import cookie from "./cookie";

const baseURL = process.env.VUE_APP_SERVICE_URL

export const dashboardData = async () => {    
    const token = cookie.getCookie("auth-token");

    const response = await axios.get(`${baseURL}/cp/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  };


 
  