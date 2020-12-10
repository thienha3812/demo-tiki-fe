import apiConfig from './apiConfig'





class OrderService {
    constructor() { }

    static async placeOrder(item_in_order: any, address: string) {
        const { data } = await apiConfig.post('order/place', { address, item_in_order })
        return data
    }
}


export default OrderService

