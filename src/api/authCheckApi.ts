import { BASE_URL } from "@/constants/config"
import { getApi } from "./baseApi"
import { getToken } from "@/hooks/baseServerHooks"

export const authCheckApi = async() => {
    const baseUrl = BASE_URL.AUTH_CHECK
    const token = getToken();
    const requestParams = {};

    try {
        const response = await getApi(requestParams, baseUrl, token)

        return response
    } catch (error) {
        throw error
    }
}