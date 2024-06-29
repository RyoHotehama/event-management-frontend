import { BASE_URL } from "@/constants/config"
import { postApi } from "./baseApi"
import { getToken } from "@/hooks/baseHooks"

export const createUserApi = async(requestParams: UserForm) => {
    const baseUrl = BASE_URL.CREATE_USER
    const token = getToken();

    try {
        const response = await postApi<UserForm>(requestParams, baseUrl, token)

        return response
    } catch (error) {
        throw error
    }
}