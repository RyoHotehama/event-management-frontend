import { createUserApi } from '@/api/createUserApi';
import { Dispatch, SetStateAction } from 'react';
import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
    role: yup.number().oneOf([0, 1], '権限が適切ではありません').required('権限は必須です'),
    lastName: yup.string().required('姓は必須です'),
    firstName: yup.string().required('名は必須です'),
});

export const onSubmit = async(data: UserForm, setErrorEmail: Dispatch<SetStateAction<string>>, setErrorLastName: Dispatch<SetStateAction<string>>, setErrorFirstName: Dispatch<SetStateAction<string>>) => {
    // フォームのデータを取得し、ユーザー登録処理を実行する
    try {
        const response = await createUserApi(data)

        return response
    } catch (error: any) {
        if (error.status === 400) {
            if (error.data.email) {
                setErrorEmail(error.data.email)
            }

            if (error.data.lastName) {
                setErrorLastName(error.data.lastName)
            }

            if (error.data.firstName) {
                setErrorFirstName(error.data.firstName)
            }
        } else {
            // todo エラー画面へ
        }
    }
};