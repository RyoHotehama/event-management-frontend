'use client'
import { onClickPage } from "@/hooks/profileListHooks"
import { Pagination, styled } from "@mui/material"

const CustomPagination = styled(Pagination)(({ theme }) => ({
    '& .MuiPaginationItem-root': {
      color: 'green',
    },
    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: 'green',
      color: 'white',
    },
  }));

export const Paginate = ({profileList, role}: {profileList: ProfileList, role: number}) => {
    return (
        <CustomPagination count={profileList.last_page} color="primary" page={profileList.current_page} onChange={(event, page) => onClickPage(page, role)}/>
    )
}