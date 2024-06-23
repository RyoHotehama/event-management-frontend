import api from "@/utils/api";

export const getApi = async <T>(requestParams: T, url: string, accessToken?: string) => {
    try {
      const response = await api.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: requestParams
      });

      return response
    } catch (error) {
        throw error
    }
}

export const postApi = async <T>(requestParams: T, url: string, accessToken?: string) => {
    try {
      const response = await api.post(url, requestParams,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response
    } catch (error: any) {
      const response = {
        status: error.response.status,
        data: error.response.data
      }
      throw response
    }
}