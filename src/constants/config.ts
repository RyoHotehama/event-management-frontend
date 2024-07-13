export const BASE_URL = {
    LOGIN: 'api/login',
    CSRF_TOKEN: 'sanctum/csrf-cookie',
    CREATE_USER: 'api/user/create',
    AUTH_CHECK: 'api/admin/user',
    PROFILE_LIST: 'api/user/list',
    PROFILE_DETAIL: 'api/user/detail'
}

export const REDIRECT_URL = {
    ADMIN: '/admin/login',
    ADMIN_ERROR: '/admin/error'
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

export const ROLE_LIST = [
    {
        name: '一般ユーザー',
        value: 0
    },
    {
        name: '管理者',
        value: 1
    },
]