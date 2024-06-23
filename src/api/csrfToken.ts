import { BASE_URL } from "@/constants/config"
import { getApi } from "./baseApi"

export const csrfTokenApi = async() => {
    const baseUrl = BASE_URL.CSRF_TOKEN
    const request = {}
    try {
        const response = await getApi(request, baseUrl)

        return response
    } catch (error) {
        throw error
    }
}