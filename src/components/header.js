import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import {
    Typography,
    Button,
    ButtonGroup,
    Toolbar,
    AppBar,
    Switch,
    IconButton,
    MenuItem,
    MenuList,
    Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Layout.scss";
import App from "../App";

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
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    paper: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none"
    },
    show: {
        display: "auto"
    },
    menuLayout: {
        color: "var(--primary)",
    },
    menuFont: {
        color: "var(--primary)",
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

    const buttonHandler = () => {
        setOpen(true)
    }

    const buttonClose = () => {
        setOpen(false)
    }

    const buttonClose2 = () => {
        setOpen(false)
    }

    const buttonClose3 = () => {
        setOpen(false)
    }

    const [open,setOpen] = useState(false)
    return (
        <AppBar className={classes.titleStretch} position= "static">
            <Toolbar variant ="dense">
            <IconButton className={open == true ? classes.hide : classes.show} onClick={buttonHandler} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Paper className={classes.paper}>
                <div className={classes.menuLayout}>
            <MenuList className={open == true ? classes.show : classes.hide}>
                <div className={classes.menuFont}>
                <MenuItem onClick={buttonClose}>Home</MenuItem>
                <MenuItem onClick={buttonClose2}>Streamers</MenuItem>
                <MenuItem onClick={buttonClose3}>Whitelist</MenuItem>
                </div>
            </MenuList>
            </div>
            </Paper>
            <Typography variant="h4" color="inherit">
            PMA-RP
          </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
