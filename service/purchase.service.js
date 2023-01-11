import axios from "axios";
import cookie from "./cookie";

const baseURL = process.env.VUE_APP_SERVICE_URL

export const listing = async (key) => {    
    const token = cookie.getCookie("auth-token");

    if(key){
      const response = await axios.get(`${baseURL}/cp/customers?key=`+key, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    }
    else{
      const response = await axios.get(`${baseURL}/cp/customers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;

    }

  };

  export const history_listing = async (key) => {    
    const token = cookie.getCookie("auth-token");

    if(key){
      const response = await axios.get(`${baseURL}/cp/transaction_purchase?key=`+key, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    }
    else{
      const response = await axios.get(`${baseURL}/cp/transaction_purchase`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;

    }

  };

  export const makePurchase = async (amount, id) => {    
    const token = cookie.getCookie("auth-token");

    try{
      const response = await axios.post(`${baseURL}/cp/purchase/`+id, amount,{
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
  
      return response.data;
      
    } catch(error){

      console.log(error);
      return error;
    }

  };
