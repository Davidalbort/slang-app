export async function handleResponse(response:object): Promise<any> {
    if (response) return await response
    
    return 
}
  
export async function handleError(error:any): Promise<any> {
    if (error.data) return await error.data
   
    return await error
}