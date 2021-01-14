import {
    AppBar, Button,
    ButtonGroup,
    Toolbar, Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from 'react-router-dom';
import "./Layout.scss";

const useStyles = makeStyles((theme) => ({
    buttons: {
        display: "flex",
        color: "var(--text)",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    titleStretch: {
        maxWidth: "100vw",
        backgroundColor: "var(--primary)",
    },
    toolBarItems: {
        margin: "0 25px 0px 10px",
        variant: "fullWidth",
        fontFamily: "Corbel",
        fontSize: "1.8vw",
        textAlign: "center",
        color: "var(--text)",
        paddingLeft: 0,
    },
    buttonGroup: {
        "& .MuiButton-root": {
            color: "var(--text)",
            fontSize: "0.8vw",
            fontFamily: "Corbel",
        }
    },
    switch: {
        position: "fixed",
        marginTop: "1.5vh",
        left: "97vw",
    },
    buttonText: {
        position: "fixed",
        color: "var(--text)",
        marginTop: "2vh",
        left: "93vw",
        fontSize: "0.8vw",
    }
}));

const toggleTheme = () => {
    if (document.documentElement.getAttribute("data-theme") == "dark") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
};

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
