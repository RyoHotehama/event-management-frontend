'use client'
import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
    role: yup.number().oneOf([0, 1], '権限が適切ではありません').required('権限は必須です'),
    lastName: yup.string().required('姓は必須です'),
    firstName: yup.string().required('名は必須です'),
});