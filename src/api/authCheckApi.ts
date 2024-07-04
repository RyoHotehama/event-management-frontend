import { BASE_URL } from "@/constants/config"
import { getApi, postApi } from "./baseApi"
import { getToken } from "@/hooks/baseHooks"

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