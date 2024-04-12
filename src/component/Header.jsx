import React from 'react'
import { projectData } from '../ProjectData';
import { AppBar, Toolbar, Checkbox, Typography, FormControl, IconButton, Drawer, Collapse, TableSortLabel, TablePagination, TableFooter, List, ListItem, Chip, useMediaQuery, Menu, MenuItem, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, InputLabel, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle, Notifications, HelpOutline, FilterList, Clear, Search, Topic } from '@mui/icons-material';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');


    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" sx={{ left: isMobile ? 0 : '18px', background: 'white', color: 'black' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', marginLeft: '10px' }}>
                    Projects
                    <Chip label={projectData.length} color="primary" size="small" sx={{ background: "#ededfc", color: '#6763dd', width: '30px', height: '25px', fontSize: '12px', fontWeight: 'bold', marginLeft: '10px' }} />
                </Typography>
                <div style={{ marginRight: '25px' }}>
                    <IconButton color="inherit">
                        <Notifications sx={{
                            color: '#868FA0'
                        }} />
                    </IconButton>
                    <IconButton color="inherit">
                        <HelpOutline sx={{
                            color: '#868FA0'
                        }} />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Avatar /> User Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Notifications /> Notifications
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <HelpOutline /> Help
                        </MenuItem>
                    </Menu>

                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header