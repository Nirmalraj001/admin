import React, { useState } from 'react';
import { Checkbox, Typography, IconButton, Collapse, TableSortLabel, TablePagination, TableFooter, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { projectData } from '../ProjectData';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FilterTable = ({ searchTerm, selectedTab, onSelectedRow }) => {

    const filteredData = projectData.filter(row =>
        Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(searchTerm?.toLowerCase())
        ) && (selectedTab === 'All' || row.projectStatus === selectedTab))

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
            onSelectedRow(projectData.map((row) => row.id))
        } else {
            setSelectedRows([]);
            onSelectedRow([])
        }
    };

    const handleSelect = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
            onSelectedRow(selectedRows.filter((rowId) => rowId !== id))

        } else {
            setSelectedRows([...selectedRows, id]);
            onSelectedRow([...selectedRows, id])
        }
    };

    return (
        <>
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
                                        <TableCell><Chip label={row.projectTimeline.start_date} color="primary" size="small" sx={{ background: "#e9edf5", color: '#464f60' }} /> &gt; <Chip label={row.projectTimeline.end_date} color="primary" size="small" sx={{ background: "#e9edf5", color: '#464f60' }} /></TableCell>
                                        <TableCell>{`US ${row.estimation.budget}`}</TableCell>
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
        </>
    )
}

export default FilterTable