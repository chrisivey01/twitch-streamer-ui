import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import {
    Typography,
    Button,
    ButtonGroup,
    Toolbar,
    AppBar,
    Switch,
    Drawer,
    IconButton,
    Divider,
    MenuItem,
    
} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from "@material-ui/icons/Menu"
import "./Layout.scss";

const drawerWidth = 240;

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
        marginTop: "1.7vh",
        left: "186vh",
    },
    buttonText: {
        position: "fixed",
        color: "var(--text)",
        marginTop: "2vh",
        left: "178vh",
        fontSize: "1.5vh",
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    paper: {
        marginRight: theme.spacing(2),
    },
    show: {
        display: "auto"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    hide: {
        display: 'none',
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: "var(--text)",
      },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "var(--text)",
      },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        backgroundColor: "var(--text)",
      },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
    contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    drawerItems: {
        color: "var(--primary)",
        fontSize: "1vw",
        fontFamily: "Corbel",
    },
    iconcolor: {
        color: "var(--text)",
    },
    chevroncolor: {
        color: "var(--primary)",
    },
    divcolor: {
        backgroundColor: "var(--tertiary)",
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
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.titleStretch}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon className={classes.iconcolor}/>
            </IconButton>
            <Typography className={classes.toolBarItems}>PMA-RP</Typography>

          </Toolbar>
          <p className={classes.buttonText}>Light Mode</p>
            <Switch className={classes.switch} onChange={toggleTheme}>Toggle Light Theme</Switch>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.chevroncolor} /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider className={classes.divcolor} />
          {/* <MenuItem className={classes.drawerItems} component={Link} to="/">Home</MenuItem> */}
          <MenuItem className={classes.drawerItems} onClick={handleDrawerClose} component={Link} to="/">Streamers</MenuItem>
          <MenuItem className={classes.drawerItems} onClick={handleDrawerClose} component={Link} to="whitelist">Whitelist</MenuItem>
          {/* <MenuItem className={classes.drawerItems} component={Link} to="discord">Discord</MenuItem> */}
          <Divider className={classes.divcolor} />
        </Drawer>
      </div>
    )
};

export default Header;
