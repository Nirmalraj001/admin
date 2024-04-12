import React, { useState } from 'react';
import { useMediaQuery, Box } from '@mui/material';

import FilterData from './FilterData';
import FilterTab from './FilterTab';
import FilterTable from './FilterTable';

const drawerWidth = '72px';
const Content = () => {

    const isMobile = useMediaQuery('(max-width:600px)');

    const [searchValue, setSearchValue] = useState("");
    const [tabChange, setTabChange] = useState('All')
    const [rowCount, setRowCount] = useState('')
    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    const handleTab = (value) => {
        setTabChange(value)
    }

    const handleRowCount = (value) => {
        setRowCount(value)
    }

    return (

        <main style={{ marginLeft: isMobile ? 0 : drawerWidth, padding: '20px' }}>
            <FilterData onSearchChange={handleSearchChange} selectedRows={rowCount} />

            <div style={{ marginTop: "20px" }}>
                <Box>
                    <FilterTab onTabChange={handleTab} />
                    <FilterTable searchTerm={searchValue} selectedTab={tabChange} onSelectedRow={handleRowCount} />
                </Box>
            </div>
        </main>
    )
}

export default Content