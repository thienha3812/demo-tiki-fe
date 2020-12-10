import apiConfig from './apiConfig'

class ReviewService {
    constructor() { }    
    static async reviewProduct(fd:FormData) {
        try{
            const { data } = await apiConfig.post('review/create',fd,{
                headers: {'Content-Type': 'multipart/form-data' }
            })
            return data
        }catch(err){
            return Promise.reject(err)
        }
    }
}


export default ReviewService

