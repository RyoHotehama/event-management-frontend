import { loginApi } from '@/api/loginApi';
import { LOGIN_ERROR_MESSAGE } from '@/constants/config';
import { Dispatch, SetStateAction } from 'react';
import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
    password: yup.string().required('パスワードは必須です'),
});

export const onSubmit = async(data: LoginForm, userRole: number, setErrorMessage: Dispatch<SetStateAction<string>>) => {
    // フォームのデータを取得し、ログイン処理を実行する
    try {
        const response = await loginApi(data, userRole)

        return response
    } catch (error: any) {
        if (error.status === 400) {
            setErrorMessage(LOGIN_ERROR_MESSAGE.ERROR_MESSAGE)
            throw error
        } else if (error.status === 401 || error.status === 403) {
            setErrorMessage(error.data.message)
            throw error
        }
    }
};