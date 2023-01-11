import axios from "axios";
import cookie from "./cookie";

const baseURL = process.env.VUE_APP_SERVICE_URL

export const login = async (signinUser) => {
    
    return axios.post(`${baseURL}/auth/login`, signinUser).then(response => {

      if (response.status == 200) {
        cookie.setCookie("auth-token", response.data.access_token, 30); 
        localStorage.setItem("LastLogged", Date.now());
        return true
      }
    }).catch(error => {
      console.log("Failed to login",error)
      return false
    })
    
};

export const register = async (signinUser) => {
    
  return axios.post(`${baseURL}/auth/register`, signinUser).then(response => {
    if (response.status == 200) {

      console.log(response)
      return response
    }
  }).catch(error => {

    console.log("Failed to Register",error)

    return error
  })
  
};

  export const signout = () => {
    cookie.setCookie("auth-token", "", 30);
    localStorage.setItem("LastLogged", Date.now());
    window.location.reload();
    window.location.replace("/")
  };
  
  