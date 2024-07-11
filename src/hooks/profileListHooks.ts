'use client'
import * as yup from 'yup';

export const schema = yup.object().shape({
    search: yup.string(),
    role: yup.mixed()
});

export const onClickPage = (page: number, role: number, search: string) => {
    let url = `/admin/user/list?page=${page}`

    if (search && search !== 'undefined') {
        url = url + `&search=${search}`
    }

    if (!isNaN(role)) {
        url = url + `&role=${role}`
    }

    window.location.href = url
}

export const handleSearch = (data: any) => {
    let url = '/admin/user/list'
    if (data.search && (data.role || data.role === 0)) {
        url = url + `?search=${data.search}&role=${data.role}`;
    } else if (data.search) {
        url = url + `?search=${data.search}`;
    } else if (data.role || data.role === 0) {
        url = url + `?role=${data.role}`;
    }

    window.location.href = url
};