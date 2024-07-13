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
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/hooks/profileDetailHooks';
import { useCallback, useState } from "react";
import { ROLE_LIST } from '@/constants/config';
import { handleBack } from '@/hooks/baseHooks';

export default function ProfileDetail({ profileDetail }: { profileDetail: ProfileDetail }) {
    const [ errorEmail, setErrorEmail ] = useState<string>('')
    const [ errorLastName, setErrorLastName ] = useState<string>('')
    const [ errorFirstName, setErrorFirstName ] = useState<string>('')
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: profileDetail.email,
            role: profileDetail.role,
            lastName: profileDetail.last_name,
            firstName: profileDetail.first_name,
        }
    });

    return (
        <Paper elevation={4} sx={{ padding: 5 }}>
            <Grid container spacing={3} sx={{ alignItems: 'center', marginBottom: 1 }}>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        ユーザーID
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant='h6'>
                        {profileDetail.id}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ alignItems: 'center', marginBottom: 1 }}>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        ユーザー名
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                        <TextField
                            {...field}
                            label="性"
                            error={!!errors.lastName || !!errorLastName}
                            helperText={errors.lastName?.message || errorLastName}
                            required
                            fullWidth
                        />
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                        <TextField
                            {...field}
                            label="名"
                            error={!!errors.lastName || !!errorFirstName}
                            helperText={errors.lastName?.message || errorFirstName}
                            required
                            fullWidth
                        />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ alignItems: 'center', marginBottom: 1 }}>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        メールアドレス
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="メールアドレス"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                required
                                fullWidth
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ alignItems: 'center', marginBottom: 1 }}>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        権限
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined" required>
                        <InputLabel id="role-label" shrink>権限</InputLabel>
                        <Controller
                            name="role"
                            control={control}
                            render={({ field }) => (
                            <Select
                                {...field}
                                labelId="role-label"
                                id="role-select"
                                label="権限"
                            >
                                {ROLE_LIST.map((role) => (
                                <MenuItem key={role.value} value={role.value}>
                                    {role.name}
                                </MenuItem>
                                ))}
                            </Select>
                            )}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ alignItems: 'center', marginBottom: 3 }}>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        作成日
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant='h6'>
                        {profileDetail.create_date}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ alignItems: 'center', marginBottom: 1 }}>
                <Grid item xs={6} sx={{ textAlign: 'right'}}>
                    <Button type="submit" variant="contained" color={'inherit'} size='large' onClick={() => handleBack()}>戻る</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button type="submit" variant="contained" color={'success'} size='large'>登録する</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
