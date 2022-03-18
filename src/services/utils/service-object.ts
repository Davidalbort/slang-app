export const SERVICE_OBJECT = {

    getAllData: (serviceObject: any) => serviceObject.getAll().then((res: any) => res.data),
    post: (serviceObject:any, model:object) => serviceObject.post(model).then( (res:any) => res.data )
    
}