import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    error: {
        textAlign: "center",
        color: "red",
        margin: "5px",
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,

    },
}));

export default function CircularIndeterminate(props) {
    const classes = useStyles();

    return (
        <div id="MyErrorMessage" className={classes.error}>
            We have a problem fetching your data, Please try again
        </div>
    );
}