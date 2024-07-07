import { redirect } from 'next/navigation';
import { authCheckApi } from '@/api/authCheckApi';
import { REDIRECT_URL } from '@/constants/config';
import { getToken } from './baseServerHooks';

const AuthCheck = async() => {
        const token = getToken()

        if (!token) {
            redirect(REDIRECT_URL.ADMIN);
        }

        const response = await authCheckApi();
        if (response.status !== 200) {
            redirect(REDIRECT_URL.ADMIN);
        }
};

export default AuthCheck;