'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProfileList({profileList}: {profileList: ProfileList}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="profile table">
        <TableHead>
          <TableRow>
            <StyledTableCell>名前</StyledTableCell>
            <StyledTableCell>権限</StyledTableCell>
            <StyledTableCell>作成日</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profileList.data.map((profileData: { user_id: number; name: string; role_name: string; create_date: string; }) =>
          (
            <StyledTableRow key={profileData.user_id}>
              <StyledTableCell component="th" scope="row">
                <Link href={`/admin/user/${profileData.user_id}`} style={{textDecoration: 'none', color: 'green'}}>
                  <Typography>
                    {profileData.name}
                  </Typography>
                </Link>
              </StyledTableCell>
              <StyledTableCell>{profileData.role_name}</StyledTableCell>
              <StyledTableCell>{profileData.create_date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
