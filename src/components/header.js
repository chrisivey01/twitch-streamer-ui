import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import {
    Typography,
    Button,
    ButtonGroup,
    Toolbar,
    AppBar,
    Switch,
} from "@material-ui/core";
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
        fontSize: "2vw",
        textAlign: "center",
        color: "var(--text)",
        paddingLeft: 0,
    },
    buttonGroup: {
        "& .MuiButton-root":{
        color: "var(--text)",
        fontSize: "1vw",
        fontFamily: "Corbel",
        }
    },
    switch: {
        position: "fixed",
        marginTop: "2.5vh",
        left: "193vh",
    },
    buttonText: {
        position: "fixed",
        color: "var(--text)",
        marginTop: "4vh",
        left: "180vh",
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
                <Button className={classes.toolBarItems} component={Link} to="/">PMA-RP</Button>
                <ButtonGroup
                    className={classes.buttonGroup}
                    aria-label="outlined primary button group"
                >
                    <Button component={Link} to="/streams">Streams</Button>
                    <Button component={Link} to="/whitelist">Whitelist</Button>
                </ButtonGroup>
            </Toolbar>
            <p className={classes.buttonText}>Light Mode</p>
            <Switch className={classes.switch} onChange={toggleTheme}>Toggle Light Theme</Switch>
        </AppBar>
    );
};

export default Header;
