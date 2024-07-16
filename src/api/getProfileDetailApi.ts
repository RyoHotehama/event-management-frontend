import { BASE_URL } from "@/constants/config"
import { getApi } from "./baseApi"
import { getToken } from "@/hooks/baseServerHooks";

export const getProfileDetailApi = async(id: number) => {
    const baseUrl = BASE_URL.PROFILE_DETAIL + `/${id}`;
    const token = getToken();

    const request = {}

    try {
        const response = await getApi(request, baseUrl, token)

        return response
    } catch (error) {
        throw error
    }
}