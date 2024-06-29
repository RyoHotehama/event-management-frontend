import { ROLE_LIST } from "@/constants/config"
import { onSubmit, schema } from "@/hooks/createUserHooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material"
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form"

const UserForm = () => {
    const [ errorEmail, setErrorEmail ] = useState<string>('')
    const [ errorLastName, setErrorLastName ] = useState<string>('')
    const [ errorFirstName, setErrorFirstName ] = useState<string>('')
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            role: 0,
            lastName: '',
            firstName: '',
        }
    });

    const handleCreateUser = useCallback(async(data: UserForm) => {
        const response = await onSubmit(data, setErrorEmail, setErrorLastName, setErrorFirstName);

        if (!response) {
            window.location.href = '/admin/error';
        }

        const userId = response?.data.userId;

        window.location.href = '/admin/complete?userId=' + userId;
    }, [errorEmail, errorLastName, errorFirstName]);

    return (
        <Paper elevation={4} sx={{ padding: 5}}>
            <Typography variant="h5" component="h1" gutterBottom>
                入力フォーム
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                        <TextField
                            {...field}
                            label="メールアドレス"
                            error={!!errors.email || !!errorEmail}
                            helperText={errors.email?.message || errorEmail}
                            required
                            fullWidth
                        />
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
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
                                defaultValue={0}
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
                <Grid item xs={6}>
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
                <Grid item xs={6}>
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
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color={'success'} onClick={handleSubmit(handleCreateUser)}>登録する</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default UserForm