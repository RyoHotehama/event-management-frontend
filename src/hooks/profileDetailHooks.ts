'use client'
import { deleteProfileApi } from '@/api/deleteProfileApi';
import { profileEditApi } from '@/api/profileEditApi';
import { Dispatch, SetStateAction } from 'react';
import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
    role: yup.number().oneOf([0, 1], '権限が適切ではありません').required('権限は必須です'),
    lastName: yup.string().required('姓は必須です'),
    firstName: yup.string().required('名は必須です'),
});

export const handleEdit = async(userData: UserForm , id: number, setErrorEmail: Dispatch<SetStateAction<string>>, setErrorLastName: Dispatch<SetStateAction<string>>, setErrorFirstName: Dispatch<SetStateAction<string>>) => {
    try {
        const response = await profileEditApi(userData, id)

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
}

export const handleDelete = async(profileId: number) => {
    if (confirm('本当に削除しますか？')) {
        try {
            await deleteProfileApi(profileId)

            alert('削除しました')

            window.location.href = '/admin/user/list'
        } catch (error: any) {
            alert('削除に失敗しました')
        }
    }
}