import { SLANG_TEST } from "./api/api-objects";
import { ApiCore } from "./utils/core";
import { SERVICE_OBJECT } from "./utils/service-object";


const SLANG_SERVICE = new ApiCore({
    getAll: true,
    post: true,
    apiUrl: SLANG_TEST.url,
    endpoint: SLANG_TEST.endpoint
})
  
export const _getSlangServiceData = async (): Promise<any> => await SERVICE_OBJECT.getAllData(SLANG_SERVICE)

export const _postSlangServiceData = async (userAnswer:object): Promise<any> => await SERVICE_OBJECT.post(SLANG_SERVICE, userAnswer)