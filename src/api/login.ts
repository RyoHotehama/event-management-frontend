import { BASE_URL } from "@/constants/config"
import { postApi } from "./baseApi"

export const loginApi = async(requestParams: LoginForm) => {
    const baseUrl = BASE_URL.LOGIN
    try {
        const response = await postApi<LoginForm>(requestParams, baseUrl)

        return response
    } catch (error) {
        throw error
    }
}