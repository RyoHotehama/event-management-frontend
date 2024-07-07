type LoginForm = {
    email: string;
    password: string;
}

type UserForm = {
    email: string,
    role: number,
    lastName: string,
    firstName: string,
}

type ProfileListParameter = {
    page?: number,
}

type ProfileList = {
    current_page: number,
    data: [
        {
            user_id: number,
            name: string,
            role_name: string,
            create_date: string
        }
    ],
    last_page: number,
    per_page: number,
    total: number,
}