import React from 'react'
import { Tooltip, Drawer, List, ListItem, useMediaQuery, Button, Box } from '@mui/material';
import Logo from '../assets/Logo.png';
import { Topic } from '@mui/icons-material';
import { SettingsOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: black;
    color: #5e5adb;
    font-size: 15px;
    border-radius: 4px;
    width: 70px;
    text-align: center;
    margin-right: 50px;
  }
`;

const listItems = [
    {
        icon: <Topic sx={{ color: 'white' }} />,
        name: 'File',
    },
    {
        icon: <SettingsOutlined sx={{ color: '#A1A9B8' }} />,
        name: 'Settings',
    },
];

const Sidebar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const drawerWidth = '72px';

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };



    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#151357', },
            }}
        >
            <Box>
                <div style={{ margin: '20px', display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt='logo' width='40px' height='40px' />
                </div>
                <List>
                    {listItems.map((item, index) => (
                        <ListItem key={index}>
                            <StyledTooltip title={item.name} placement='right' >
                                <Button sx={{ background: '#0D0B45', border: '1px solid #2A278F', minWidth: '0px' }}>
                                    {item.icon}
                                </Button>
                            </StyledTooltip>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer >
    )
}

export default Sidebar