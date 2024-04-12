import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Checkbox, Typography, FormControl, IconButton, Drawer, Collapse, TableSortLabel, TablePagination, TableFooter, List, ListItem, Chip, useMediaQuery, Menu, MenuItem, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, InputLabel, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TopicIcon from '@mui/icons-material/Topic';
import { AccountCircle, Notifications, HelpOutline, FilterList, Clear, Search, Topic } from '@mui/icons-material';
import { ListItemIcon, Tooltip } from '@mui/material';
import { FileCopyOutlined, SettingsOutlined, Add, Circle } from '@mui/icons-material';
import Logo from './assets/Logo.png';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const drawerWidth = '72px';

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


const projectData = [
    {
        id: 1,
        projectName: 'Project A',
        pmName: 'John Doe',
        projectStatus: 'In Progress',
        lastUpdate: '2023-03-15',
        totalResources: 10,
        projectTimeline: '3 months',
        estimation: '$50,000',
        projectSituation: 'Stable',
        details: 'This is the project description for Project A.'
    },
    {
        id: 2,
        projectName: 'Project B',
        pmName: 'Jane Smith',
        projectStatus: 'On Hold',
        lastUpdate: '2023-02-01',
        totalResources: 8,
        projectTimeline: '6 months',
        estimation: '$70,000',
        projectSituation: 'At Risk',
        details: 'This is the project description for Project B.'
    },
    {
        id: 3,
        projectName: 'Project C',
        pmName: 'Bob Johnson',
        projectStatus: 'Completed',
        lastUpdate: '2023-01-10',
        totalResources: 12,
        projectTimeline: '4 months',
        estimation: '$60,000',
        projectSituation: 'Closed',
        details: 'This is the project description for Project C.'
    }
]
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const projectsData = [
    {
        id: 1,
        project_name: "Project A",
        pm_name: "John Doe",
        project_status: "In Progress",
        last_update: "2024-04-11",
        total_resources: 10,
        project_timeline: "01/01/2024 - 12/31/2024",
        estimation: "$100,000 - 12 months",
        project_situation: {
            risk: "Low",
            on_hold: "No",
            potential_risk: "Minor delays due to supply chain issues"
        }
    },
    {
        id: 2,
        project_name: "A Project ",
        pm_name: "John dsfDoe",
        project_status: "In Progress",
        last_update: "2024-04-11",
        total_resources: 10,
        project_timeline: "01/01/2024 - 12/31/2024",
        estimation: "$100,000 - 12 months",
        project_situation: {
            risk: "Low",
            on_hold: "No",
            potential_risk: "Minor delays due to supply chain issues"
        }
    },
    // Add more project data here
];


const ProjectStatusTab = ({ status, count }) => {
    return (
        <Tab label={
            <Chip
                label={status}
                color="default"
                variant="outlined"
                avatar={<span style={{ backgroundColor: 'gray', width: '10px', height: '10px', borderRadius: '50%' }} />}
                style={{ padding: '0 8px' }}
            />
        } />
    );
};


const ResponsiveDrawer = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const [selectedTab, setSelectedTab] = useState('All');


    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickAction = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleCloseAction = () => {
        setAnchorEl1(null);
    };

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedValue, setSelectedValue] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projectData);

    const handleSearchTextChange = (event) => {
        const searchText = event.target.value;
        setSearchTerm(searchText);
    };

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
        setSelectedValue('');
    };

    const handleValueChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const filteredData = projectData.filter(row =>
        Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        ) && (selectedTab === 'All' || row.projectStatus === selectedTab))

    const [value, setValue] = React.useState("");
    const [focused, setFocused] = React.useState(false);


    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const projectStatusCounts = projectData.reduce((acc, project) => {
        acc[project.projectStatus] = (acc[project.projectStatus] || 0) + 1;
        return acc;
    }, {});


    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFocus = () => {
        setFocused(true);
    };


    const handleBlur = () => {
        setFocused(false);
    };

    const handleClear = () => {
        setValue("");
    };

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

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('projectName');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedRows, setSelectedRows] = useState([]);

    console.log(selectedRows.length, "selectedRows")

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        const newOrder = isAsc ? 'desc' : 'asc';
        setOrder(newOrder);
        setOrderBy(property);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const sortedRows = [...filteredData].sort((a, b) => {
        if (order === 'asc') {
            return a[orderBy] > b[orderBy] ? 1 : -1;
        } else {
            return a[orderBy] < b[orderBy] ? 1 : -1;
        }
    });

    const displayedRows = sortedRows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

    const [openRows, setOpenRows] = useState([]);

    const handleToggle = (id) => {
        if (openRows.includes(id)) {
            setOpenRows(openRows.filter((rowId) => rowId !== id));
        } else {
            setOpenRows([...openRows, id]);
        }
    };

    //select table checkbox

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedRows(projectData.map((row) => row.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelect = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <>
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
            <main style={{ marginLeft: isMobile ? 0 : drawerWidth, padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {selectedRows.length > 0 ? (
                            <>
                                <Typography variant="h6" component="div" sx={{ fontSize: '15px', color: 'gray' }}>
                                    {selectedRows.length} Selected
                                </Typography>
                                <Button onClick={handleClickAction} style={{ marginLeft: '20px', textTransform: 'capitalize' }} endIcon={<KeyboardArrowDownIcon />}>
                                    Actions
                                </Button>
                                <Menu anchorEl={anchorEl1} open={Boolean(anchorEl1)} onClose={handleCloseAction}>
                                    <MenuItem value="all">Send Mail</MenuItem>
                                    <MenuItem value="projectName" style={{ color: 'brown' }}>Archeive</MenuItem>
                                    <MenuItem value="pmName" style={{ color: 'red' }}>Delete</MenuItem>
                                </Menu>
                            </>
                        ) :
                            <Button sx={{ border: '1px solid black', minWidth: '0px' }}>
                                <FilterList />
                            </Button>
                        }

                        <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginLeft: "20px",
                                    // marginBottom: 2,
                                    [isMobile ? "flexDirection" : ""]: "column",
                                }}
                            >
                                <FormControl>
                                    <Select size="small" value={selectedFilter} onChange={handleFilterChange} startAdornment={<FilterAltIcon />} sx={{
                                        width: isMobile ? "100%" : "auto",
                                        marginBottom: isMobile ? 2 : 0,
                                    }}>
                                        <MenuItem value="all">All</MenuItem>
                                        <MenuItem value="projectName">Project Name</MenuItem>
                                        <MenuItem value="pmName">Project Manager</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    value={searchTerm}
                                    onChange={handleSearchTextChange}
                                    size="small"
                                    placeholder='search'
                                    sx={{
                                        width: isMobile ? "100%" : "auto",
                                        marginBottom: isMobile ? 2 : 0,
                                        marginLeft: "0px",
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <Search
                                                color="action"
                                                fontSize="small"
                                                style={{ marginRight: "10px" }}
                                            />
                                        ),
                                        endAdornment: (
                                            <>
                                                {value && (
                                                    <Clear
                                                        color="action"
                                                        fontSize="small"
                                                        // onClick={handleClear}
                                                        style={{ marginLeft: "10px" }}
                                                    />
                                                )}
                                                <Clear
                                                    color="disabled"
                                                    fontSize="small"
                                                    style={{ marginLeft: "10px" }}
                                                />
                                            </>
                                        ),
                                    }}
                                />
                            </Box>
                        </div>

                    </Box>

                    <div>
                        <Button variant="contained" startIcon={<Add />} sx={{ background: '#5e5adb', textTransform: 'capitalize' }}>
                            New Project
                        </Button>
                    </div>

                </Box>

                <div style={{ marginTop: "20px" }}>
                    <Box>
                        <Tabs value={selectedTab} onChange={handleTabChange}
                            textColor={'#5e5adb'}
                            indicatorColor={'#5e5adb'}
                            sx={{
                                "& .Mui-selected": {
                                    color: '#5e5adb',
                                    bgcolor: "white",
                                    borderBottom: "2px solid #5e5adb",
                                    outline: 0
                                },
                                "& .Mui-focusVisible": {
                                    bgcolor: "white",
                                },
                                "& .MuiTab-root": {
                                    "&:hover": {
                                        color: "black",
                                        borderBottom: "2px solid black",
                                        outline: 0
                                    },
                                    "&:active": {
                                        color: '#5e5adb',
                                        bgcolor: "white",
                                        borderBottom: "2px solid #5e5adb",
                                        outline: 0
                                    },
                                },
                            }}>
                            <Tab label={
                                <div style={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}>
                                    <span style={{ marginRight: "5px" }}>All</span>
                                    <Chip label={projectData.length} color="primary" size="small" sx={{ background: selectedTab === 'All' ? "#ededfc" : "#e9edf5", color: selectedTab === 'All' ? '#6763dd' : '#5a6376', width: '30px', height: '25px', fontSize: '12px', fontWeight: 'bold' }} />
                                </div>
                            } value="All" />
                            {Object.keys(projectStatusCounts).map(status => (
                                <Tab key={status}
                                    label={
                                        <div style={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}>
                                            <span style={{ marginRight: "5px" }}>{status}</span>
                                            <Chip label={projectStatusCounts[status]} color="primary" size="small" sx={{ background: selectedTab === status ? "#ededfc" : "#e9edf5", color: selectedTab === status ? '#6763dd' : '#5a6376', width: '30px', height: '25px', fontSize: '12px', fontWeight: 'bold' }} />
                                        </div>
                                    }
                                    value={status} />
                            ))}
                        </Tabs>

                        {displayedRows.length > 0 ? (
                            <TableContainer>
                                <Table>
                                    <TableHead sx={{ textTransform: 'uppercase' }}>
                                        <TableRow>
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={selectedRows.length === projectData.length} onChange={handleSelectAll} />
                                            </TableCell>
                                            <TableCell>
                                            </TableCell>
                                            <TableCell sortDirection={orderBy === 'id' ? order : false}>
                                                <TableSortLabel active={orderBy === 'id'} direction={order} onClick={() => handleSort('id')}>
                                                    #
                                                </TableSortLabel>
                                            </TableCell>
                                            <TableCell sortDirection={orderBy === 'projectName' ? order : false}>
                                                <TableSortLabel active={orderBy === 'projectName'} direction={order} onClick={() => handleSort('projectName')}>
                                                    Project Name
                                                </TableSortLabel>
                                            </TableCell>
                                            <TableCell>
                                                PM
                                            </TableCell>
                                            <TableCell>
                                                Status
                                            </TableCell>
                                            <TableCell sortDirection={orderBy === 'lastUpdate' ? order : false}>
                                                <TableSortLabel active={orderBy === 'lastUpdate'} direction={order} onClick={() => handleSort('lastUpdate')}>
                                                    Last Update
                                                </TableSortLabel>
                                            </TableCell>
                                            <TableCell>
                                                Resources
                                            </TableCell>
                                            <TableCell>
                                                Project Timeline
                                            </TableCell>
                                            <TableCell>
                                                Estimation
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {displayedRows.map((row) => (
                                            <React.Fragment key={row.id}>
                                                <TableRow key={row.id} hover>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox checked={selectedRows.includes(row.id)} onChange={() => handleSelect(row.id)} />
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton
                                                            aria-label="expand row"
                                                            size="small"
                                                            onClick={() => handleToggle(row.id)}
                                                        >
                                                            {openRows.includes(row.id) ? < KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell>{row.id}</TableCell>
                                                    <TableCell sx={{ color: '#5e5adb', fontWeight: '500', fontSize: '14px' }}>{row.projectName}</TableCell>
                                                    <TableCell>{row.pmName}</TableCell>
                                                    <TableCell>
                                                        <Chip startIcon={<Circle />} label={<div style={{ display: "flex", alignItems: "center", }}>
                                                            <Circle size='small' sx={{ fontSize: "10px", marginRight: "5px" }} /><span>{row.projectStatus}</span></div>} color="primary" size="small" sx={{ background: row.projectStatus === 'Completed' ? '#e1fcef' : row.projectStatus === 'In Progress' ? '#FCF2E6' : '#FFEDEF', color: row.projectStatus === 'Completed' ? '#14804a' : row.projectStatus === 'In Progress' ? '#aa5b00' : '#d34453' }} />
                                                    </TableCell>
                                                    <TableCell>{row.lastUpdate}</TableCell>
                                                    <TableCell><Chip label={row.totalResources} color="primary" size="small" sx={{ background: "#e9edf5", color: '#464f60' }} /></TableCell>
                                                    <TableCell>{row.projectTimeline}</TableCell>
                                                    <TableCell>{`US ${row.estimation}`}</TableCell>
                                                </TableRow>
                                                <Collapse in={openRows.includes(row.id)} timeout="auto" unmountOnExit>
                                                    <TableRow>
                                                        <TableCell colSpan={9}>
                                                            <p>{row.details}</p>
                                                        </TableCell>
                                                    </TableRow>
                                                </Collapse>
                                            </React.Fragment>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                                count={projectData.length}
                                                page={page}
                                                rowsPerPage={rowsPerPage}
                                                onPageChange={handlePageChange}
                                                onRowsPerPageChange={handleRowsPerPageChange}
                                                rowsPerPageOptions={[5, 10, 25]}
                                            />
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        ) : (
                            <Typography variant="h6" align="center">No records found</Typography>
                        )}

                    </Box>
                </div>
            </main>
        </>
    );
};

export default ResponsiveDrawer;