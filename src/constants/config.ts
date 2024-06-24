export const BASE_URL = {
    LOGIN: 'api/login',
    CSRF_TOKEN: 'sanctum/csrf-cookie'
}

export const LOGIN_ERROR_MESSAGE = {
    ERROR_MESSAGE: 'メールアドレスまたはパスワードが違います。'
}

export const USER_ROLE = {
    NORMAL_USER_ROLE: 0,
    ADMIN_USER_ROLE: 1
}

export const DRAWER_LIST = [
    {
        title: 'ユーザー一覧'
    },
    {
        title: 'イベント一覧'
    },
    {
        title: 'ユーザー作成'
    }
]