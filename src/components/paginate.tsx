'use client'
import { onClickPage } from "@/hooks/profileListHooks"
import { Pagination, styled } from "@mui/material"

const CustomPagination = styled(Pagination)(() => ({
    '& .MuiPaginationItem-root': {
      color: 'green',
      '&:hover': {
      backgroundColor: 'rgba(0, 128, 0, 0.1)',
    },
    },
    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: 'green',
      color: 'white',
      '&:hover': {
      backgroundColor: 'green',
      color: 'white',
    },
    },
  }));

export const Paginate = ({profileList, role, search}: {profileList: ProfileList, role: number, search: string}) => {
    return (
        <CustomPagination count={profileList.last_page} color="primary" page={profileList.current_page} onChange={(event, page) => onClickPage(page, role, search)}/>
    )
}