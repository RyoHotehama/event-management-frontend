'use client'
import { Container } from '@mui/material';
import HeadLine from '@/components/headLine';
import UserForm from '@/components/userForm';

export default function UserCreate() {
    return (
        <Container maxWidth='md'>
            <HeadLine title='新規ユーザー作成' />
            <UserForm />
        </Container>
    );
}
