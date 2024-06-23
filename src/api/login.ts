import { BASE_URL } from "@/constants/config"
import { postApi } from "./baseApi"

export const loginApi = async(requestParams: LoginForm, userRole: number) => {
    const baseUrl = BASE_URL.LOGIN
    const request = {
        email: requestParams.email,
        password: requestParams.password,
        role: userRole,
    }
    try {
        const response = await postApi<LoginForm>(request, baseUrl)

        return response
    } catch (error) {
        throw error
    }
}