'use client'
import { handleLogout } from "@/hooks/logoutHooks";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from "react";
import DrawerList from "./drawerList";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false)
    const pathname = usePathname();
    let redirectUrl = '/login'
    if (pathname.includes('/admin/')) {
        redirectUrl = '/admin/login'
    }

    const toggleDrawer = useCallback(() => {
        setOpen((open: boolean) => !open)
    }, [open])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundImage: 'linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))' }}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    PlanIt
                </Typography>
                <Button type="submit" variant="contained" color={'success'} onClick={() => handleLogout(redirectUrl)}>ログアウト</Button>
                </Toolbar>
                <Drawer
                    anchor={'left'}
                    open={open}
                    onClose={toggleDrawer}
                    sx={{ '& .MuiDrawer-paper': { backgroundImage: 'linear-gradient(90deg, rgba(144, 245, 154, 1) 55%, rgba(4, 202, 255, 1))' }}}
                >
                    <DrawerList />
                </Drawer>
            </AppBar>
        </Box>
    )
}

export default Header