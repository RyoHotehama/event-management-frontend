import { BASE_URL } from "@/constants/config"
import { deleteApi } from "./baseApi"
import { getToken } from "@/hooks/baseHooks";

export const deleteProfileApi = async(profileId: number) => {
    const baseUrl = BASE_URL.PROFILE_DELETE + `/${profileId}`;
    const token = getToken();

    const request = {}

    try {
        const response = await deleteApi(request, baseUrl, token)

        return response
    } catch (error) {
        throw error
    }
}