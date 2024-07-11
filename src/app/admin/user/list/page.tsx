import { Box, Button, Container, Typography } from '@mui/material';
import HeadLine from '@/components/headLine';
import AuthCheck from '@/hooks/authCheckHooks';
import Link from 'next/link';
import { getProfileApi } from '@/api/getProfileApi';
import { redirect } from 'next/navigation';
import { REDIRECT_URL } from '@/constants/config';
import ProfileList from '@/components/profileList';
import { Paginate } from '@/components/paginate';
import SearchPanel from '@/components/searchPanel';

export default async function UserList({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    // 認証
    await AuthCheck();

    const page = Number(searchParams?.page)
    const role = Number(searchParams?.role)
    const search = String(searchParams?.search)

    let profileList = [];

    try {
        const response = await getProfileApi(page, role, search);
        profileList = response.data.profileList;

    } catch (error: any) {
        redirect(REDIRECT_URL.ADMIN_ERROR)
    }

    return (
        <Container maxWidth='md'>
            <HeadLine title='ユーザー一覧' />
            <Link href={'/admin/user/create'}>
                <Button type="submit" variant="contained" color={'success'}>ユーザーの追加</Button>
            </Link>
            <Box marginTop={2} alignItems="center">
                <SearchPanel search={search} role={role}/>
            </Box>
            {profileList.data.length !== 0 ?
                <>
                    <Box marginTop={2}>
                        <Typography variant='h6'>
                            <b>{profileList.total}</b>件該当しました
                            <b>{profileList.from}</b>～
                            <b>{profileList.to}</b>件のユーザーを表示
                        </Typography>
                    </Box>
                    <Box marginTop={2}>
                        <ProfileList profileList={profileList}/>
                    </Box>
                    <Box display="flex" justifyContent="center" marginTop={5}>
                        <Paginate profileList={profileList} role={role} search={search}/>
                    </Box>
                </>
            :
            <Box marginTop={5} textAlign={'center'}>
                <Typography>該当するデータがありませんでした。</Typography>
            </Box>
        }
        </Container>
    );
}
