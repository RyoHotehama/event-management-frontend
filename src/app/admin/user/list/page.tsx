import { Box, Button, Container, Pagination } from '@mui/material';
import HeadLine from '@/components/headLine';
import AuthCheck from '@/hooks/authCheckHooks';
import Link from 'next/link';
import { getProfileApi } from '@/api/getProfileApi';
import { redirect } from 'next/navigation';
import { REDIRECT_URL } from '@/constants/config';
import ProfileList from '@/components/profileList';
import { onClickPage } from '@/hooks/profileListHooks';
import { Paginate } from '@/components/paginate';

export default async function UserList({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    // 認証
    await AuthCheck();

    const page = Number(searchParams?.page)
    const role = Number(searchParams?.role)

    let profileList = [];

    try {
        const response = await getProfileApi(page);
        profileList = response.data.profileList;

    } catch (error: any) {
        redirect(REDIRECT_URL.ADMIN_ERROR)
    }

console.log(profileList)
    return (
        <Container maxWidth='md'>
            <HeadLine title='ユーザー一覧' />
            <Link href={'/admin/user/create'}>
                <Button type="submit" variant="contained" color={'success'}>ユーザーの追加</Button>
            </Link>
            <Box sx={{ marginTop: 5 }}>
                <ProfileList profileList={profileList}/>
            </Box>
            <Box display="flex" justifyContent="center" marginTop={5}>
                <Paginate profileList={profileList} role={role}/>
            </Box>
        </Container>
    );
}
