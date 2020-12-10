import apiConfig from './apiConfig'





class AccountService {
    constructor() { }

    static async login(email: string, password: string) {
        const { data } = await apiConfig.post('account/login', { email, password })
        return data
    }
}


export default AccountService

