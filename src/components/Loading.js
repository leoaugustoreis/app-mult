import React from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1
    }
}));

function Loading({ open }) {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop}
            open={open}>
            <CircularProgress color="primary,0" />
        </Backdrop>
    );
}

export default Loading;