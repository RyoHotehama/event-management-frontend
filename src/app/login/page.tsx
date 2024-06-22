import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{ backgroundImage: 'linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))', height: '100vh' }}>
        <Container maxWidth='xs' sx={{ paddingTop: 30 }}>
            <Box border={2} borderColor={'#f8f8f8'} borderRadius={3} sx={{ backgroundColor: '#f8f8f8' }}>
                <Stack justifyContent="center" alignItems="center" gap="30px">
                    <Typography id="login_heading" variant="h2" fontSize="1.5rem" paddingTop={5} color={'#2b2b2b'}>ログイン</Typography>
                    <Stack component="form" gap="20px" aria-labelledby="login_heading" width={'80%'}>
                        <TextField label="メールアドレス" />
                        <TextField label="パスワード" />
                        <Button variant="contained" color={'success'} sx={{ marginBottom: 5}}>ログイン</Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    </Box>
  );
}
