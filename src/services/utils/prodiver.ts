import axios from "axios";
import { handleError, handleResponse } from "./response";

const getAll = async (apiUrl: string, endpoint: string) => { 
    
  return await axios
                .get(`${apiUrl}/${endpoint}`)
                .then(handleResponse)
                .catch(handleError)
}

const post = async (apiUrl: string, endpoint: string, model: object) => { 
  
  const headers = {'Content-Type': 'application/json'}

  return await axios
                .post(`${apiUrl}/${endpoint}`, model, {headers: headers})
                .then(handleResponse)
                .catch(handleError)
}

export const API_PROVIDER = { 
    
  getAll,
  post
    
}