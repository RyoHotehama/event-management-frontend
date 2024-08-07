'use client'
import { Box, Container, Stack, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { onSubmit, schema } from '@/hooks/loginHooks';
import { useCallback, useState } from 'react';
import { USER_ROLE } from '@/constants/config';
import { csrfTokenApi } from '@/api/csrfToken';
import nookies from 'nookies';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [ errorMessage, setErrorMessage ] = useState<string>('');
    const router = useRouter();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const handleLogin = useCallback(async(data: LoginForm) => {
        await csrfTokenApi();
        const response = await onSubmit(data, USER_ROLE.ADMIN_USER_ROLE, setErrorMessage);
        if (response) {
            if (response.status == 200) {
                nookies.set(null, 'token', response.data.token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                });

                router.push('/admin/dashboard')
            }
        } else {
            window.location.href = '/admin/error'
        }
    }, [errorMessage, router]);

    return (
        <Box sx={{ backgroundImage: 'linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))', height: '100vh' }}>
            <Container maxWidth='xs' sx={{ paddingTop: 30 }}>
                <Box border={2} borderColor={'#f8f8f8'} borderRadius={3} sx={{ backgroundColor: '#f8f8f8' }}>
                    <Stack justifyContent="center" alignItems="center" gap="30px">
                        <Typography id="login_heading" variant="h2" fontSize="1.5rem" paddingTop={5} color={'#2b2b2b'}>管理者ログイン</Typography>
                        <Stack component="form" gap="20px" aria-labelledby="login_heading" width={'80%'} onSubmit={handleSubmit(handleLogin)}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="メールアドレス"
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                )}
                            />
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        type="password"
                                        label="パスワード"
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                    />
                                )}
                            />
                            {errorMessage && (
                                <Typography color="error" variant='body1' fontSize={14}>{errorMessage}</Typography>
                            )}
                            <Button type="submit" variant="contained" color={'success'} sx={{ marginBottom: 5 }}>ログイン</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
