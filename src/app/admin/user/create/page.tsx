import { Container } from '@mui/material';
import HeadLine from '@/components/headLine';
import UserForm from '@/components/userForm';
import AuthCheck from '@/hooks/authCheckHooks';

export default async function UserCreate() {
    // 認証
    await AuthCheck();

    return (
        <Container maxWidth='md'>
            <HeadLine title='新規ユーザー作成' />
            <UserForm />
        </Container>
    );
}
