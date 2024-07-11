import { BASE_URL } from "@/constants/config"
import { getApi } from "./baseApi"
import { getToken } from "@/hooks/baseServerHooks";

export const getProfileApi = async(page?: number, role?: number, search?: string) => {
    const baseUrl = BASE_URL.PROFILE_LIST;
    const token = getToken();

    let request: ProfileListParameter = {}

    if (page) {
        request.page = page
    }

    if (role) {
        request.role = role
    }

    if (search && search !== 'undefined') {
        request.search = search
    }

    try {
        const response = await getApi<ProfileListParameter>(request, baseUrl, token)

        return response
    } catch (error) {
        throw error
    }
}