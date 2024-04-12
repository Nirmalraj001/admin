import React, { useState } from 'react';
import { Chip } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { projectData } from '../ProjectData';

const FilterTab = ({ onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState('All');

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        onTabChange(newValue);
    };

    const projectStatusCounts = projectData.reduce((acc, project) => {
        acc[project.projectStatus] = (acc[project.projectStatus] || 0) + 1;
        return acc;
    }, {});

    return (
        <>
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
                        <Chip label={projectData.length} color="primary" size="small" sx={{ background: selectedTab === 'All' ? "#ededfc" : "#e9edf5", color: selectedTab === 'All' ? '#6763dd' : '#5a6376', width: '35px', height: '25px', fontSize: '12px', fontWeight: 'bold' }} />
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
        </>
    )
}

export default FilterTab