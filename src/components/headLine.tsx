import { Box, Typography } from "@mui/material"

const HeadLine = ({title}: {title: string}) => {
    return (
        <Box paddingTop={5} paddingBottom={5}>
            <Typography variant='h4' color={'#222222'} borderBottom={1} component={'span'}>
                {title}
            </Typography>
        </Box>
    )
}

export default HeadLine