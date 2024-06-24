import { DRAWER_LIST } from "@/constants/config"
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"

const DrawerList = () => {
    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {DRAWER_LIST.map((value) => (
                <ListItem key={value.title} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={value.title} sx={{ textAlign: 'center'}}/>
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default DrawerList