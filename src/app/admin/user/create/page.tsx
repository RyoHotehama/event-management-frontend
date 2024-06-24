'use client'
import { Box, Container, Stack, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { onSubmit, schema } from '@/hooks/loginHooks';
import { useCallback, useState } from 'react';
import { USER_ROLE } from '@/constants/config';
import { csrfTokenApi } from '@/api/csrfToken';
import nookies from 'nookies';
import { useRouter } from 'next/navigation';

export default function UserCreate() {
    return (
        <Box>
            あああ
        </Box>
    );
}
