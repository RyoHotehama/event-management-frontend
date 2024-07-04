'use client'
import Header from "@/components/header";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    let redirectUrl = '/dashboard'
    if (pathname.includes('/admin/')) {
        redirectUrl = '/admin/dashboard'
    }
  return (
    <>
        <Header />
        <Box marginTop={'15%'} textAlign={'center'}>
            <Typography variant="h3">404 NOT FOUND</Typography>
            <Typography variant="h4">お探しのページは存在しません</Typography>
            <Typography variant="h5">削除されたか、入力したURLが間違っている可能性があります。</Typography>
            <Box marginTop={3}>
                <Link href={redirectUrl}>
                    <Button type="submit" variant="contained" color={'success'} size="large">トップへ</Button>
                </Link>
            </Box>
        </Box>
    </>
  );
}