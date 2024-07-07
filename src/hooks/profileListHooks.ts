'use client'
import { createUserApi } from '@/api/createUserApi';
import { Dispatch, SetStateAction } from 'react';

export const onClickPage = (page: number, role: number) => {
    let url = `/admin/user/list?page=${page}`
    if (!isNaN(role)) {
        url = url + `&role=${role}`
    }

    window.location.href = url
}

export const onSubmit = async(data: UserForm, setErrorEmail: Dispatch<SetStateAction<string>>, setErrorLastName: Dispatch<SetStateAction<string>>, setErrorFirstName: Dispatch<SetStateAction<string>>) => {
    // フォームのデータを取得し、ユーザー登録処理を実行する
    try {
        const response = await createUserApi(data)

        return response
    } catch (error: any) {
        if (error.status === 400) {
            if (error.data?.errors.email) {
                setErrorEmail(error.data.errors.email)
            }

            if (error.data?.errors.lastName) {
                setErrorLastName(error.data.errors.lastName)
            }

            if (error.data?.errors.firstName) {
                setErrorFirstName(error.data.errors.firstName)
            }

            throw error
        }
    }
};