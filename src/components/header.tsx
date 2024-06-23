import { Box, Button, Grid, Typography } from "@mui/material"

const Header = () => {
    return (
        <Box height={100} sx={{ backgroundImage: 'linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))', width: '100%', position: '100%' }}>
            <Grid container height={'100%'} alignItems={'center'} justifyContent={'center'}>
                <Grid item xs={10} paddingLeft={5}>
                    <Typography variant="h3">
                        PlanIt
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button type="submit" variant="contained" color={'success'}>ログアウト</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header