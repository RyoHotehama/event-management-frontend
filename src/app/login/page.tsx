'use client'
import { Box, Container, Stack, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { onSubmit, schema } from '@/hooks/loginHooks';
import { useCallback, useState } from 'react';

export default function Login() {
    const [ errorMessage, setErrorMessage ] = useState<string>('');

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const handleLogin = useCallback(async(data: LoginForm) => {
        const response = await onSubmit(data, setErrorMessage);

        if (response) {
            // 成功処理を実装
        }
    }, [errorMessage]);

    return (
        <Box sx={{ backgroundImage: 'linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))', height: '100vh' }}>
        <Container maxWidth='xs' sx={{ paddingTop: 30 }}>
            <Box border={2} borderColor={'#f8f8f8'} borderRadius={3} sx={{ backgroundColor: '#f8f8f8' }}>
            <Stack justifyContent="center" alignItems="center" gap="30px">
                <Typography id="login_heading" variant="h2" fontSize="1.5rem" paddingTop={5} color={'#2b2b2b'}>ログイン</Typography>
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
