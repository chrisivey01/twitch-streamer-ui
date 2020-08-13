import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import {
    Typography,
    Button,
    ButtonGroup,
    Toolbar,
    AppBar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    buttons: {
        display: "flex",
        color: "#E3E3E3",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    titleStretch: {
        maxWidth: "100vw",
        backgroundColor: "#333333",
    },
    toolBarItems: {
        margin: "0 25px 0px 10px",
        variant: "fullWidth",
    },
    buttonGroup: {
        "& .MuiButton-root":{
            color:"#E3E3E3"
        }
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.titleStretch} position="static">
            <Toolbar>
                <Typography className={classes.toolBarItems}>PMA-RP</Typography>
                <ButtonGroup
                    className={classes.buttonGroup}
                    aria-label="outlined primary button group"
                >
                    <Button component={Link} to="/">Streams</Button>
                    <Button component={Link} to="/whitelist">Whitelist</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
