'use client'
import { handleDelete } from "@/hooks/profileDetailHooks"
import { Button } from "@mui/material"

const UserDeleteButton = ({profileId}: {profileId:number}) => {
    return (
        <Button type="submit" variant="contained" color={'error'} size='large' onClick={() => handleDelete(profileId)}>削除する</Button>
    )
}

export default UserDeleteButton