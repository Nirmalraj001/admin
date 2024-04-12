import React from 'react';
import Chip from '@mui/material/Chip';
import { Circle } from '@mui/icons-material';


export const StatusChip = ({ status }) => {
    let color;
    let icon;

    switch (status) {
        case 'Completed':
            color = 'success';
            icon = <Circle />;
            break;
        case 'On Hold':
            color = 'default';
            icon = <Circle style={{ color: 'black' }} />;
            break;
        case 'In Progress':
            color = 'error';
            icon = <Circle style={{ color: 'red' }} />;
            break;
        default:
            color = 'default';
            icon = null;
    }

    return <Chip label={status} color={color} avatar={icon} />;
};