import React, { useState } from 'react';
import { Typography, FormControl, useMediaQuery, Menu, MenuItem, Button, TextField, Select, Box } from '@mui/material';
import { FilterList, Clear, Search, Topic } from '@mui/icons-material';
import { SettingsOutlined, Add } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { projectData } from '../ProjectData';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



const FilterData = ({ onSearchChange, selectedRows }) => {

    console.log(selectedRows, "selectedRows")
    const isMobile = useMediaQuery('(max-width:600px)');

    const [anchorEl1, setAnchorEl1] = React.useState(null);

    const handleClickAction = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleCloseAction = () => {
        setAnchorEl1(null);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedValue, setSelectedValue] = useState('');

    const handleSearchTextChange = (event) => {
        const searchText = event.target.value;
        setSearchTerm(searchText);
        onSearchChange(searchText);
    };

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
        setSelectedValue('');
    };

    return (
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
    )
}


export default FilterData