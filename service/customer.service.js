import axios from "axios";
import cookie from "./cookie";

const baseURL = process.env.VUE_APP_SERVICE_URL

export const listing = async () => {    
    const token = cookie.getCookie("auth-token");

    const response = await axios.get(`${baseURL}/cp/customers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

  export const createCustomer = async (data) => {    
    const token = cookie.getCookie("auth-token");

    const response = await axios.post(`${baseURL}/cp/customer/`, data,{
      
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  };

  export const updateCustomer = async (id, data) => {    
    const token = cookie.getCookie("auth-token");

    const response = await axios.put(`${baseURL}/cp/customer/`+id, data,{
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  };


  