'use client'
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box marginTop={'15%'} textAlign={'center'}>
        <Typography variant="h3">500 Sever Error</Typography>
        <Typography variant="h4">アクセスしようとしたページは表示できませんでした。</Typography>
        <Typography variant="h5">しばらく時間をおいて再度アクセスしてみてください。</Typography>
        <Box marginTop={3}>
            <Link href={'/admin/dashboard'}>
                <Button type="submit" variant="contained" color={'success'} size="large">トップへ</Button>
            </Link>
        </Box>
    </Box>
  );
}