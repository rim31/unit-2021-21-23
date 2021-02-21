import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
    },
}));

export default function MyButton(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            { !props.loading &&
                <Button id="MyButton" variant="contained" color="primary" onClick={() => {
                    props.fetchData();
                    props.setLoading(true)
                }}>
                    {props.error ? "Retry" : "Load More"}
                </Button>
            }
        </div>
    );
}