import nookies from 'nookies';

export const getToken = () => {
    const cookie = nookies.get(null);

    const token = cookie.token;

    return token;
}
