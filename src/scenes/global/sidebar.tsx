import { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"; 
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined"; 
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"; 
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const menuItems = [
    { title: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { title: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
    { title: "Contacts Information", icon: <ContactsOutlinedIcon />, path: "/contacts" },
    { title: "Invoices Balances", icon: <ReceiptOutlinedIcon />, path: "/invoices" },
    { title: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    { title: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
    { title: "Help", icon: <HelpOutlinedIcon />, path: "/help" }, 
    { title: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },  
    { title: "Pie Chart", icon: <PieChartOutlinedIcon />, path: "/pie" }, 
    { title: "Time", icon: <AccessTimeOutlinedIcon />, path: "/time" }, 
    { title: "Map", icon: <MapOutlinedIcon />, path: "/map" }, 
];

export const Sidebar = () => {
    const theme = useTheme();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <Drawer
            variant="permanent"
            open={!isCollapsed}
            sx={{
                width: isCollapsed ? 64 : 240,
                '& .MuiDrawer-paper': {
                    width: isCollapsed ? 64 : 240,
                    backgroundColor: theme.palette.background.default,
                    transition: 'width 0.3s',
                },
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
                {!isCollapsed && (
                    <Typography variant="h6" noWrap>
                        Admins
                    </Typography>
                )}
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem component={Link} to={item.path} key={item.title}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        {!isCollapsed && <ListItemText primary={item.title} />}
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
