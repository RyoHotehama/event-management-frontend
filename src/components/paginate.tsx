'use client'
import { onClickPage } from "@/hooks/profileListHooks"
import { Pagination } from "@mui/material"

export const Paginate = ({profileList, role}: {profileList: ProfileList, role: number}) => {
    return (
        <Pagination count={profileList.last_page} color="primary" page={profileList.current_page} onChange={(event, page) => onClickPage(page, role)}/>
    )
}