'use client'
import nookies from 'nookies';

export const handleLogout = (redirectUrl: string) => {
    nookies.destroy(null, 'token');

    // router.push()だとエラーになってしまう
    window.location.href = redirectUrl
};