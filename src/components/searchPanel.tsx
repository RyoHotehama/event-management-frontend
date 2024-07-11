'use client'
import { ROLE_LIST } from "@/constants/config";
import { handleSearch, schema } from "@/hooks/profileListHooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const SearchPanel = ({search, role}: {search?: string, role?: number}) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            search: search && search !== 'undefined' ? search : '',
            role: role || role === 0 ? role : '',
        }
    });

    return (
        <Stack gap="20px" aria-labelledby="login_heading" direction={'row'} alignItems={'center'}>
            <Controller
                name="search"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="検索したいユーザーを入力してください"
                        error={!!errors.search}
                        helperText={errors.search?.message}
                        sx={{ width: '50%'}}
                    />
                )}
            />
            <FormControl variant="outlined" sx={{ width: '35%'}}>
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
                        displayEmpty
                    >
                        <MenuItem value="">
                            <em>未選択</em>
                        </MenuItem>
                        {ROLE_LIST.map((role) => (
                        <MenuItem key={role.value} value={role.value}>
                            {role.name}
                        </MenuItem>
                        ))}
                    </Select>
                    )}
                />
            </FormControl>
            <Button type="submit" variant="contained" color={'success'} size="large" onClick={handleSubmit(handleSearch)}>検索</Button>
        </Stack>
    )
}

export default SearchPanel