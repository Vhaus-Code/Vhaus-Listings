import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
    var copyrightText = "Vhaus Listing " + new Date().getFullYear() + '.'
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}{copyrightText}
        </Typography>
    );
}