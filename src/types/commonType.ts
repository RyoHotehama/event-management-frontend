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
    role?: number,
    search?: string
}

type ProfileList = {
    current_page: number,
    data: [
        {
            id: number,
            name: string,
            role_name: string,
            create_date: string
        }
    ],
    last_page: number,
    per_page: number,
    total: number,
}

type ProfileDetail = {
    id: number,
    last_name: string,
    first_name: string,
    email: string,
    role: number,
    create_date: string
}