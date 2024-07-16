import { Box, Button, Container, Grid, Typography } from '@mui/material';
import HeadLine from '@/components/headLine';
import AuthCheck from '@/hooks/authCheckHooks';
import { notFound, redirect } from 'next/navigation';
import { REDIRECT_URL } from '@/constants/config';
import { getProfileDetailApi } from '@/api/getProfileDetailApi';
import ProfileDetail from '@/components/profileDetail';
import UserDeleteButton from '@/components/userDeleteButton';

export default async function UserDetail({ params }: { params: { id: string } }) {
    // 認証
    await AuthCheck();

    const id = Number(params.id)

    let profileDetail = [];

    try {
        const response = await getProfileDetailApi(id);
        profileDetail = response.data.profileDetail;

    } catch (error: any) {
        if (error.status === 400) {
            notFound()
        }
        redirect(REDIRECT_URL.ADMIN_ERROR)
    }

    return (
        <Container maxWidth='md'>
            <Grid container>
                <Grid item xs={10}>
                    <HeadLine title='ユーザー詳細' />
                </Grid>
                <Grid item xs={2} paddingTop={5} paddingBottom={5}>
                    <UserDeleteButton profileId={profileDetail.id}/>
                </Grid>
            </Grid>
            <ProfileDetail profileDetail={profileDetail} />
        </Container>
    );
}
