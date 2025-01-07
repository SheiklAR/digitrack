import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'status' } };

export default function BasicSwitches({isActive}) {
    return (
        <div>
            <Switch {...label} checked={isActive} />
        </div>
    );
}