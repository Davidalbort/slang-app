import { API_PROVIDER } from './prodiver';


export class ApiCore {

  getAll
  post
  
  constructor( {getAll, post, apiUrl, endpoint}: any) {
    
    if (getAll) this.getAll = () => API_PROVIDER.getAll(apiUrl, endpoint) 

    if (post) this.post = (model:object) => API_PROVIDER.post(apiUrl, endpoint, model) 
      
  }

}