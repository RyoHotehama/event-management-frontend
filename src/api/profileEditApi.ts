import { BASE_URL } from "@/constants/config"
import { putApi } from "./baseApi"
import { getToken } from "@/hooks/baseHooks";

export const profileEditApi = async(request: UserForm, id: number) => {
    const baseUrl = BASE_URL.PROFILE_EDIT + `/${id}`;
    const token = getToken();

    try {
        const response = await putApi<UserForm>(request, baseUrl, token)

        return response
    } catch (error) {
        throw error
    }
}