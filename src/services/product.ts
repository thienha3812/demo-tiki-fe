import apiConfig from './apiConfig'





class ProductService {
    constructor() { }
    static async getProducts() {
        const { data } = await apiConfig.get('/product/get-all')
        return data
    }
    static async getProductById(product_id: number) {
        const { data } = await apiConfig.post(`/product/${product_id}`)
        console.log(data)
        return data
    }
}


export default ProductService

